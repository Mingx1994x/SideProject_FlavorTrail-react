import { flavorTrailApi, flavorTrailApiNew } from "./apiInstance"

// 取得使用者個人資料
export const getUserProfile = (id) => {
  return flavorTrailApi.get(`/users/${id}`)
}

// 更新使用者資料
export const updateUserProfile = (id, data) => {
  return flavorTrailApi.patch(`/users/${id}`, data)
}

// 取得使用者個人資料(new)
export const getUserProfileData = () => {
  return flavorTrailApiNew.get('/user/profile')
}