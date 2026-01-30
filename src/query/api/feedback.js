import { flavorTrailApi } from "./apiInstance"



export const getFeedback = () => {
  return flavorTrailApi.get('/feedbacks?_expand=user')
}