import axios from "axios";

const { VITE_BASE_URL } = import.meta.env;
const flavorTrailApi = axios.create({
  baseURL: VITE_BASE_URL
})


flavorTrailApi.interceptors.response.use(
  (response) => {
    console.log(response.data);
    return Promise.resolve(response.data)
  },
  (error) => {
    return Promise.reject(error.response.data)
  },
)

export default flavorTrailApi