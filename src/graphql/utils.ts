import { FeedFilter, FeedQueryVariables, FeedType as GQLFeedType } from './queries';

export const generateFeedFilter: (
  props: FeedFilter & { after?: FeedQueryVariables['after'] },
) => FeedQueryVariables = ({ type, maxReadTime, minReadTime, tags, after }) => ({
  first: 20,
  ...(after && { after }),
  commentsFirst: 1,
  filter: {
    type,
    ...(maxReadTime && { maxReadTime }),
    ...(minReadTime && { minReadTime }),
    ...(tags && { tags }),
  },
});
