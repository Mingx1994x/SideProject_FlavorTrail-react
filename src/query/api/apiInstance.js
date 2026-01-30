import axios from "axios";

const { VITE_BASE_URL, VITE_LOGIN_URL } = import.meta.env;

export const flavorTrailApi = axios.create({
  baseURL: VITE_BASE_URL
})


flavorTrailApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

export const hexApi = axios.create({
  baseURL: VITE_LOGIN_URL
})

hexApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

