import { flavorTrailApi } from './apiInstance'

// 貼文相關
export function getPosts(filter = {}) {
  return flavorTrailApi.get('/posts', {
    params: {
      ...filter,
      _expand: 'user'
    }
  })
}

export function getPostById(id) {
  return flavorTrailApi.get(`/posts/${id}?_expand=user`)
}

export function createPost(data) {
  return flavorTrailApi.post('/posts', { ...data })
}

export function updatePost({ id, data }) {
  return flavorTrailApi.patch(`/posts/${id}`, { ...data })
}

// 貼文留言相關
export function getComments() {
  return flavorTrailApi.get('/comments?_expand=user')
}

export function createComment(data) {
  return flavorTrailApi.post('/comments', { ...data })
}