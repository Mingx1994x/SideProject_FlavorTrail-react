import { flavorTrailApiNew } from "./apiInstance"


// 取得使用者個人資料(new)
export const getUserProfile = () => {
  return flavorTrailApiNew.get('/user/profile')
}

// 更新使用者資料(new)
export const updateUserProfile = (data) => {
  return flavorTrailApiNew.patch(`/user/profile`, data)
}