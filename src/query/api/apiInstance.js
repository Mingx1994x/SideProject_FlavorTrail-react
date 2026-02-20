import axios from "axios";
import { getToken } from "../../utils/handleToken";

const { VITE_BASE_URL, VITE_LOGIN_URL, VITE_BASE_URL_NEW } = import.meta.env;

// json-server
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

// google sheet 資料庫
export const flavorTrailApiNew = axios.create({
  baseURL: VITE_BASE_URL_NEW
})

flavorTrailApiNew.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error.response?.data)
  },
)

flavorTrailApiNew.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
