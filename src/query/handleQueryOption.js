import { queryKeys } from "../data/queryKeys";
import { buildPostsParams } from "../utils/handlePostsParam";
import { getCityData, getFoodTypeData, getSaveMethodsData } from "./api/formSelectOptions";
import { getComments, getPostById, getPosts } from "./api/post";
import { getUserProfile } from "./api/user";



// KEY
// post 
export const postQueriesKey = {
  all: (filter) => [queryKeys.post, filter],
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
export const formSelectOptionsQueriesKey = {
  city: ["city"],
  foodType: ["food-type"],
  saveMethod: ["save-method"],
}

//Query Options
// all posts
export const allPostsQueryOption = (filter) => ({
  queryKey: postQueriesKey.all(filter),
  queryFn: () => getPosts(buildPostsParams(filter))
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

// form select options_city
export const cityQueryOption = () => ({
  queryKey: formSelectOptionsQueriesKey.city,
  queryFn: getCityData
})
// form select options_food types
export const foodTypeQueryOption = () => ({
  queryKey: formSelectOptionsQueriesKey.foodType,
  queryFn: getFoodTypeData
})
// form select options_save methods
export const saveMethodsQueryOption = () => ({
  queryKey: formSelectOptionsQueriesKey.saveMethod,
  queryFn: getSaveMethodsData
})