import { flavorTrailApi } from "./apiInstance"

export const getCityData = () => {
  return flavorTrailApi.get('/twCities')
}

export const getFoodTypeData = () => {
  return flavorTrailApi.get('/foodTypes')
}

export const getSaveMethodsData = () => {
  return flavorTrailApi.get('/saveMethod')
}