import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronDown, Seo, Code, X, ArrowLeft, ArrowRight, PenEdit } from '@team-hashnode/matrix-ui';
import TextArea from 'react-textarea-autosize';
import RixSVG from '../components/Logos/RixSVG';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import isURL from 'validator/lib/isURL';
import useStorage from '../../hooks/useStorage';
import useStorageStack from '../../hooks/useStorageStack';

const { ObjectId } = require('bson');

export function RixSearch() {
    const [searchType, setSearchType] = useState('websearch');
    const inputRef = useRef<HTMLTextAreaElement>();
    const [progress, setProgress] = useState(0);
    const { value: trending, setItem: setTrending } = useStorage('trending');
    const { value: userName, setItem: setUserName } = useStorage('userName');
    const { stack, pushItem } = useStorageStack('history', 3);
    const [ addingName, setAddingName ] = useState(false);
    const [greeting, setGreeting] = useState('');
    const [currentView, setCurrentView] = useState<'trending' | 'history'>('trending');
    const [name, setName]= useState('')

    const getTending = () => {
        fetch('https://hashnode.com/api/ai/rix/suggested-questions')
            .then(res => res.json())
            .then(res => setTrending(res.questions));
    }


    useLayoutEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef.current]);

    useEffect(() => {
      setName(userName);
    }, [userName]);

    useEffect(() => {
        getTending();
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        let currentGreeting = '';
        if (currentHour >= 12 && currentHour <= 17) {
            currentGreeting = 'Good Afternoon';
        } else if (currentHour >= 18 && currentHour <= 23) {
            currentGreeting = 'Good Evening';
        } else {
            currentGreeting = 'Good Morning'
        }
        setGreeting(currentGreeting);
    }, []);

    const changeSearchType = (type: string) => {
        setSearchType(type)
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const getSearchType = () => {
        if (searchType === 'quick') {
          return 'Quick';
        }
        if (searchType === 'code') {
          return 'Code Writer';
        }
    
        return 'Web Search';
      };

    const startAnimation = () => {
        if (progress === 95) {
            setProgress(0); // Reset progress if animation already completed
        } else {
            setProgress(95); // Start the animation to 95%
        }
    };

    const askQuestion = async (questionText: string) => {
        if (!questionText) {
          return null;
        }

        const question = isURL(questionText)
          ? `Please extract key points and summarize the content at: ${questionText}`
          : questionText;
        const urlToScan = isURL(questionText) ? questionText : null;
    
        inputRef.current!.setAttribute('disabled', 'disabled');
    
        const body = {
          id: new ObjectId().toString(),
          searchType: urlToScan ? 'websearch' : searchType,
          question,
          urlToScan,
        };
    
        startAnimation();
    
        const response = await fetch('https://hashnode.com/api/ai/rix/add-conversation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify(body),
        });
    
        const json = await response.json();
    
        if (json.conversation) {
          pushItem({ questionText, chatId: json.conversation._id });
          window.location.href = encodeURI(`https://hashnode.com/rix/${json.conversation._id}`);
        }
        return null;
      };

      const handleSearch = async () => {
        startAnimation();
        console.log(inputRef.current);
        await askQuestion(inputRef.current.value);
    }

    console.log(stack)

    return (
        <div className="pt-20 flex justify-center flex-col items-center gap-y-10">
                <p className="group items-center text-xl font-bold dark:text-white text-slate-700">
                  {greeting}
                  {userName && !addingName ? <span>{', '}{userName}</span> : null}
                  {addingName ? (
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.keyCode === 13 || e.key === 'Enter') {
                          setUserName(name);
                          setAddingName(false);
                        }

                        if (e.keyCode === 27 || e.key === 'Escape') {
                          setAddingName(false);
                        }
                      }}
                      className="outline-none bg-transparent border border-t-0 border-l-0 border-r-0 border-b-slate-700 dark:border-b-slate-200 text-slate-700 dark:text-white ml-4"
                    />
                  ) : null}
                  {
                    !addingName && (
                      <button onClick={() => setAddingName(true)}>
                        <PenEdit  size="sm" />
                      </button>
                    )
                  }
                </p>
                <div className='relative p-2 border flex items-center justify-between bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-100 dark:border-opacity-50 w-full sm:max-w-lg lg:max-w-2xl rounded-[30px]'>
                    <div
                      className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-blue-100/50 dark:bg-blue-900/50 rounded-[30px]"
                      style={{
                        width: `${progress}%`,
                        transition: 'width 0.5s',
                      }}
                    />
                    <div className="flex gap-x-2 flex-grow items-center">
                        <RixSVG />
                        <TextArea
                            onKeyDown={(e) => {
                                if (e.keyCode === 13 || e.key === 'Ente') {
                                    if (!e.shiftKey) {
                                        e.preventDefault();
                                        handleSearch().then();
                                    }
                                }
                            }}
                            ref={inputRef}
                            placeholder="Ask a question about programming"
                            className="border-none !h-auto resize-none outline-none bg-transparent flex-grow focus:outline-none text-slate-600 dark:text-slate-100 text-base"
                        />
                    </div>
                    <div
                      className="flex flex-row items-end h-full pb-2 text-base md:bottom-auto md:top-0 md:pb-0 md:items-center right-2"
                    >
                      <DropdownMenu.Root modal={false}>
                        <DropdownMenu.Trigger asChild>
                          <button
                            type="button"
                            className="flex flex-row items-center justify-center h-10 gap-2 px-5 py-2.5 text-sm font-medium border rounded-full dark:border-slate-800 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                            tabIndex={0}
                          >
                            <span className="block">{getSearchType()}</span>
                            <ChevronDown size="sm" />
                          </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                          <DropdownMenu.Content
                            align="end"
                            className="z-50 overflow-hidden text-sm py-4 leading-snug bg-white border shadow-lg focus:outline-none dark:border-slate-800 dark:bg-slate-900 w-[23rem] rounded-xl"
                            sideOffset={15}
                          >
                            <DropdownMenu.Item
                              onClick={() => {
                                changeSearchType('websearch');
                              }}
                              className="flex flex-row items-start gap-5 px-4 py-3 cursor-pointer focus:outline-blue-600 dark:focus:outline-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50"
                              tabIndex={0}
                            >
                              <span className="text-slate-500 dark:text-slate-400">
                                <Seo size="md" />
                              </span>
                              <div className="flex flex-col items-start flex-1 gap-1">
                                <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">
                                  Web Search Mode
                                </span>
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                  Performs real-time web search and parses answers to provide up-to-date information.
                                </span>
                              </div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                              onClick={() => {
                                changeSearchType('quick');
                              }}
                              className="flex flex-row items-start gap-5 px-4 py-3 cursor-pointer focus:outline-blue-600 dark:focus:outline-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-sllassName="
                              tabIndex={0}
                            >
                              <span className="text-slate-500 dark:text-slate-400">
                                {/* Todo: Icon not found in matrix */}
                                <svg width={20} height={20} viewBox="0 0 14 18" fill="none">
                                  <path
                                    d="M7.83366 1.5V7.33333H12.8337L6.16699 16.5V10.6667H1.16699L7.83366 1.5Z"
                                    stroke="currentColor"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <div className="flex flex-col items-start flex-1 gap-1">
                                <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">
                                  Quick Mode
                                </span>
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                  Retrieves answers based on previous learning and knowledge stored within the AI model.
                                </span>
                              </div>
                            </DropdownMenu.Item>
                            <DropdownMenu.Item
                              onClick={() => {
                                changeSearchType('code');
                              }}
                              className="flex flex-row items-start gap-5 px-4 py-3 cursor-pointer focus:outline-blue-600 dark:focus:outline-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-50"
                              tabIndex={0}
                            >
                              <span className="text-slate-500 dark:text-slate-400">
                                <Code size="md" />
                              </span>
                              <div className="flex flex-col items-start flex-1 gap-1">
                                <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">
                                  Code Writer
                                </span>
                                <span className="text-sm text-slate-600 dark:text-slate-300">
                                  Helps you generate, modify, and visualize code across various programming languages
                                  and frameworks.
                                </span>
                              </div>
                            </DropdownMenu.Item>
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                    </div>
                </div>
                <p
                  className="text-center w-full mb-10 text-sm leading-normal md:mb-0 top-2 left-5 text-slate-400 dark:text-slate-500"
                >
                  To write multiple lines, use
                  <span
                    className="px-2 mx-1 py-1 text-xs font-medium bg-slate-50 text-slate-500 rounded-full  border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
                  >
                    Shift + ⏎
                  </span>
                </p>
                <div className="flex flex-col gap-y-2 justify-center items-center">
                    {currentView === 'history' && stack.length ? (
                        <>
                        <p className="text-slate-600 font-semibold dark:text-slate-300">Pick up where you left off</p>
                         {stack.map(q => (
                           <a
                            className="block py-2.5 px-4 font-medium text-sm text-blue-600 rounded-full hover:bg-blue-200 dark:text-blue-400 dark:hover:bg-[#172554] dark:hover:text-blue-300"
                            href={encodeURI(`https://hashnode.com/rix/${q.chatId}`)}
                          >
                            {q.questionText}
                           </a>
                         ))}
                        <button
                            onClick={() => setCurrentView('trending')}
                            className="px-2 flex items-center gap-x-1 mx-1 py-1 text-xs font-medium bg-slate-50 text-slate-500 rounded-full  border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
                        >
                            <ArrowLeft size="sm" />
                            Back to trending
                        </button>
                        </>
                    ): null}
                    {currentView === 'trending' && trending && trending.length ? (
                        <>
                            <p className="text-slate-600 font-semibold dark:text-slate-300">What&apos;s trending on Rix?</p>
                            {trending.map(q => (
                                <a
                                    key={q}
                                    className="block py-2.5 px-4 font-medium text-sm text-blue-600 rounded-full hover:bg-blue-200 dark:text-blue-400 dark:hover:bg-[#172554] dark:hover:text-blue-300"
                                    href={`https://hashnode.com/rix/search?q=${q}`}
                                    >
                                    {q}
                                </a>  
                            ))}
                            {
                              stack.length ? (
                                <button
                                    onClick={() => setCurrentView('history')}
                                    className="px-2 flex items-center gap-x-1 mx-1 py-1 text-xs font-medium bg-slate-50 text-slate-500 rounded-full  border border-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800"
                                >
                                    See history
                                    <ArrowRight size="sm" />
                                </button>
                              ) : null
                            }
                        </>
                    ) : null}
                </div>
            </div>
    );
}
