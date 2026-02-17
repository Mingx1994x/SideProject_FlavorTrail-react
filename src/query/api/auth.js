import { flavorTrailApiNew } from "./apiInstance";

export const login = (data) => {
  return flavorTrailApiNew.post(`/auth/login`, {
    ...data
  })
}