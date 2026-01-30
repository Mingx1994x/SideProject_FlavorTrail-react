import { queryKeys } from "../data/queryKeys";
import { getComments, getPostById } from "./api/post";

// post 
// KEY
export const postQueriesKey = {
  all: [queryKeys.post],
  detail: (postId) => [queryKeys.post, postId],
}

//Query Options
export const postByIdQueryOption = (id) => ({
  queryKey: postQueriesKey.detail(id),
  queryFn: () => getPostById(id),
})

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