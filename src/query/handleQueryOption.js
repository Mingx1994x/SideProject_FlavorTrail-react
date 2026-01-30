import { queryKeys } from "../data/queryKeys";
import { getComments } from "./api/post";

// post comments
// KEY
export const commentQueriesKey = {
  all: [queryKeys.comment],
  list: (postId) => [queryKeys.comment, postId]
}

//Query Options
export const commentQueryOption = () => ({
  queryKey: commentQueriesKey.all,
  queryFn: getComments,
})