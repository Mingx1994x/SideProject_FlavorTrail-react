import { flavorTrailApiNew } from "./apiInstance";

export const login = (data) => {
  return flavorTrailApiNew.post('/auth/login', {
    ...data
  })
}

export const checkout = async () => {
  const res = await flavorTrailApiNew.get('/auth/check')
  if (res.status !== 'success') {
    throw new Error(res.message)
  }

  return res.data
}