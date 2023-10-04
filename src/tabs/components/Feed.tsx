import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'urql';
import { FeedType as GQLFeedType, FeedDocument, PopularTagsV2Document, Period, TagsFeedDocument, PopularTag, TagPostsSort } from '../../graphql/queries';
import { generateFeedFilter } from '../../graphql/utils';
import { MatrixImage, FeaturedBadge, ClockTime, ChevronRight, ChevronLeft } from '@team-hashnode/matrix-ui';
import CircleSVG from './Logos/Circle';
import { gqlClient } from '../App';

type FeedType = 'personalized' | 'following' | 'featured' | 'recent'; // relevant is the old personalized feed

const mapFeedTypeToGqlFeedType = (feedType: FeedType, isUserLoggedIn: boolean): GQLFeedType => {
    switch (feedType) {
      case 'personalized':
        return isUserLoggedIn ? GQLFeedType.Personalized : GQLFeedType.Relevant;
      case 'following':
        return GQLFeedType.Following;
      case 'recent':
        return GQLFeedType.Recent;
      case 'featured':
        return GQLFeedType.Featured;
  
      default:
        throw new Error(`GQL feed type: ${feedType} not supported `);
    }
  };

export default function Feed() {
    const [currentFeedType, setCurrentFeedType] = useState<FeedType>('featured');
    const feedTypeForGql = mapFeedTypeToGqlFeedType(currentFeedType, false);
    const [nextToken, setNextToken] = useState<string | null | undefined>(null);
    const [selectedTag, setSelectedTags] = useState(null);
    const [loadingTagFeed, setLoadingTagFeed] = useState(false);
    const [selectedTagFeed, setSelectedTagFeed] = useState(null);
    const [hiddenLeftScroll, setHiddenLeftScroll] = useState(true);
    const [hiddenRightScroll, setHiddenRightScroll] = useState(false);
    const tagScroll = useRef<HTMLDivElement>();

    useEffect(() => {
        const getTagFeed = async () => {
            console.log('****', selectedTag);
            if (selectedTag) {
                setLoadingTagFeed(true);
                // @ts-ignore
               const { data, error } = await  gqlClient.query(TagsFeedDocument, { slug: selectedTag.slug, first: 20, filter: { sortBy: TagPostsSort.Popular } }).toPromise();
               setSelectedTagFeed(data.tag.feed);
               setLoadingTagFeed(false);
            } else {
                setSelectedTagFeed(null);
            }
        }
        getTagFeed();
    }, [selectedTag]);


    useEffect(() => {
        const handleScroll = () => {
            if (tagScroll.current.scrollLeft <= 60) {
                setHiddenLeftScroll(true);
            } else {
                setHiddenLeftScroll(false);
            }

            if (tagScroll.current.scrollLeft >= tagScroll.current.scrollWidth - tagScroll.current.offsetWidth - 2) {
                setHiddenRightScroll(true);
            } else {
                setHiddenRightScroll(false);
            }
        };
        if (tagScroll.current) {   
            tagScroll.current.addEventListener('scrollend', handleScroll);
        }
        return () => {
            if (tagScroll.current) {
                tagScroll.current.removeEventListener('scrollend', handleScroll);
            }
        }
    }, [tagScroll.current]);

    const [{ data: tags, fetching: fetchingTags }] = useQuery({
        // @ts-ignore
        query: PopularTagsV2Document,
        requestPolicy: 'cache-first',
        variables: {
            first: 10,
            filter: { period: Period.Week }
        }
    });

    const { popularTagsV2: popularTags } = tags || {
        popularTagsV2: {
            edges: [],
            pageInfo: {
            hasNextPage: false,
            endCursor: null,
            },
        }
    }

    const [{ data, fetching, operation }] = useQuery({
        // @ts-ignore
        query: FeedDocument,
        requestPolicy: 'cache-first',
        variables: {
            ...generateFeedFilter({
            type: feedTypeForGql,
            after: nextToken,
            }),
        },
    });

    const { feed } = data || {
        feed: {
            edges: [],
            pageInfo: {
            hasNextPage: false,
            endCursor: null,
            },
        },
    };

    console.log({ data, fetching, operation });

    const handleScroll = (dir: 'left' | 'right') => {
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(dir == 'left'){
                tagScroll.current.scrollLeft -= 25;
            } else {
                tagScroll.current.scrollLeft += 25;
            }
            scrollAmount += 25;
            if(scrollAmount >= 200){
                window.clearInterval(slideTimer);
            }
        }, 25);
    }

    return (
       <div className='relative max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl mx-auto mt-10 py-4 overflow-hidden'>
            <div className="w-full overflow-x-auto no-scrollbar" ref={tagScroll}>
                <div className="flex gap-x-4 mb-4 w-[1800px]">
                    <button
                        onClick={() => {
                            setCurrentFeedType('featured');
                            setSelectedTags(null);
                        }}
                        className={`${(currentFeedType === 'featured' && !selectedTag) ? 'dark:bg-slate-800 border-blue-700 text-blue-700 dark:border-none dark:text-slate-100' : 'dark:text-slate-100 dark:border-slate-700'} hover:bg-slate-100 flex px-6 py-2 hover:dark:bg-slate-800 cursor-pointer font-semibold gap-x-3 rounded-full border items-center`}
                    >
                        <FeaturedBadge size="md" />
                        Featured
                    </button>
                    <button
                        onClick={() => {
                            setCurrentFeedType('recent');
                            setSelectedTags(null);
                        }}
                        className={`${(currentFeedType === 'recent' && !selectedTag) ? 'dark:bg-slate-800 border-blue-700 text-blue-700 dark:border-none dark:text-slate-100' : 'dark:text-slate-100 dark:border-slate-700'} hover:bg-slate-100 flex px-6 py-2 hover:dark:bg-slate-800 cursor-pointer font-semibold gap-x-3 rounded-full border items-center`}
                    >
                        <ClockTime size="md" />
                        Recent
                    </button>
                    {popularTags.edges.map(({ node }, index) => (
                        <button
                            onClick={() => setSelectedTags(node)}
                            key={index}
                            className={`${selectedTag && selectedTag.slug === node.slug ? 'dark:bg-slate-800 border-blue-700 text-blue-700 dark:border-none dark:text-slate-100' : 'dark:text-slate-100 dark:border-slate-700'} flex px-6 py-2 hover:dark:bg-slate-800 cursor-pointer font-semibold gap-x-3 rounded-full border dark:border-slate-700 flex-nowrap items-center dark:text-slate-100 hover:bg-slate-100 text-slate-800`}
                        >
                            {node.name}
                        </button>
                    ))}
                </div>
                <div
                    onClick={() => handleScroll('left')}
                    className={`${hiddenLeftScroll ? 'hidden' : 'block'} bg-white/70 dark:bg-slate-900/70 absolute left-0 top-4 dark:shadow-[-20px_0px_9px_6px_#0f172a]`}>
                    <button className="p-2 border rounded-full bg-white dark:bg-slate-900 dark:text-white">
                        <ChevronLeft size="md" />
                    </button>
                </div>
                <div
                    onClick={() => handleScroll('right')}
                    className={`${hiddenRightScroll ? 'hidden' : 'block'} bg-white/70 dark:bg-slate-900/70 absolute right-0 top-4 dark:shadow-[20px_0px_9px_6px_#0f172a]`}>
                    <button className="p-2 border rounded-full bg-white dark:bg-slate-900 dark:text-white">
                        <ChevronRight size="md" />
                    </button>
                </div>
            </div>
            <div className="colums-1 md:columns-2 lg:columns-3 gap-4">
                {!fetching && !loadingTagFeed && (selectedTagFeed || feed).edges.map(({ node }, index) => (
                    <a href={node.url} className={`dark:hover:bg-slate-800 hover:bg-slate-100 transition-all break-inside-avoid flex flex-col gap-y-2 mb-4 p-2 border border-slate-200 dark:border-slate-700 dark:border-opacity-50 rounded-lg`}>
                        {node.coverImage && node.coverImage.url && (
                            <MatrixImage
                                loading="lazy"
                                placeholder='blur'
                                src={node.coverImage.url}
                            />
                        )}
                        <h3 className="text-base font-medium text-slate-900 dark:text-slate-100">{node.title}</h3>
                        <span className="text-base text-slate-500 dark:text-slate-300"><span className="text-base font-thin">By <span className="text-base font-medium">{node.author.name}</span></span></span>
                        <div className="flex gap-x-2 items-center text-slate-600 dark:text-slate-100 font-normal">
                            <span className="text-base">{node.totalReactions} Likes</span>
                            <CircleSVG />
                            <span className="text-base">{node.views} Reads</span>
                        </div>
                    </a>
                ))}
                {
                    (fetching || loadingTagFeed) ? [...Array(10).keys()].map((_, index) => (
                        <div className={`bg-slate-200 animate-pulse dark:bg-slate-800 ${index % 2 === 0 ? 'h-32' : 'h-28'}  mb-4 break-inside-avoid`}></div>
                    )) : null
                }
            </div>
            <div className="w-full flex justify-center my-4">
                <a
                    className="px-4 py-2 border-none dark:text-slate-200 text-slate-800 rounded-full border text-sm bg-slate-200 dark:bg-slate-800"
                    href={selectedTag ? `https://hashnode.com/n/${selectedTag.slug}` : `https://hashnode.com/${currentFeedType}`}
                >
                    See more on hashnode
                </a>
            </div>
       </div>
    )
}