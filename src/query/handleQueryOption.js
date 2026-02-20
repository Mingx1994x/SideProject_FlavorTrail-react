import { queryKeys } from "../data/queryKeys";
import { getCityData } from "./api/city";
import { getComments, getPostById } from "./api/post";
import { getUserProfileData } from "./api/user";

// KEY
// post
export const postQueriesKey = {
  all: [queryKeys.post],
  detail: (postId) => [queryKeys.post, postId],
}
// post_comments
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

// Query Options
// post
export const postByIdQueryOption = (id) => ({
  queryKey: postQueriesKey.detail(id),
  queryFn: () => getPostById(id),
})
// post_comments
export const commentQueryOption = () => ({
  queryKey: commentQueriesKey.all,
  queryFn: getComments,
})
export const userQueryOption = () => ({
  queryKeys: authQueriesKey.user,
  queryFn: getUserProfileData
})
// city
export const cityQueryOption = () => ({
  queryKeys: cityQueriesKey.city,
  queryFn: getCityData
})