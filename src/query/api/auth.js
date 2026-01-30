import { hexApi } from "./apiInstance";

export const login = (data) => {
  return hexApi.post(`/admin/signin`, {
    ...data
  })
}