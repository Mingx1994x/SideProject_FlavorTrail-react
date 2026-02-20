import { flavorTrailApi } from "./apiInstance"

export const getCityData = () => {
  return flavorTrailApi.get('/twCities')
}