import { queryKeys } from "../data/queryKeys";
import { getCityData } from "./api/city";
import { getComments, getPostById, getPosts } from "./api/post";
import { getUserProfile } from "./api/user";



// KEY
// post 
export const postQueriesKey = {
  all: [queryKeys.post],
  detail: (postId) => [queryKeys.post, postId],
}

// post comments
export const commentQueriesKey = {
  all: [queryKeys.comment],
  list: (postId) => [queryKeys.comment, postId]
}
// auth & user
export const authQueriesKey = {
  auth: [queryKeys.auth],
  user: [queryKeys.auth, "user"]
}
// city
export const cityQueriesKey = {
  city: ["city"],
}

//Query Options
// all posts
export const allPostsQueryOption = () => ({
  queryKey: postQueriesKey.all,
  queryFn: getPosts
})

// post by id
export const postByIdQueryOption = (id) => ({
  queryKey: postQueriesKey.detail(id),
  queryFn: () => getPostById(id),
})

// post comments
export const commentQueryOption = () => ({
  queryKey: commentQueriesKey.all,
  queryFn: getComments,
})
export const userQueryOption = () => ({
  queryKey: authQueriesKey.user,
  queryFn: getUserProfile
})
// city
export const cityQueryOption = () => ({
  queryKey: cityQueriesKey.city,
  queryFn: getCityData
})