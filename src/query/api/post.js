import { flavorTrailApi } from './apiInstance'

// 貼文相關
export function getPosts() {
  return flavorTrailApi.get('/posts?_expand=user')
}

export function getPostById(id) {
  return flavorTrailApi.get(`/posts/${id}?_expand=user`)
}

// 貼文留言相關
export function getComments() {
  return flavorTrailApi.get('/comments?_expand=user')
}

export function createComment(data) {
  return flavorTrailApi.post('/comments', { ...data })
}