import { useQuery } from '@tanstack/react-query';
import {
  cityQueryOption,
  foodTypeQueryOption,
  saveMethodsQueryOption,
} from '../query/handleQueryOption';

const useFormSelectOptions = () => {
  const cityDataQuery = useQuery(cityQueryOption());
  const foodTypeDataQuery = useQuery(foodTypeQueryOption());
  const saveMethodDataQuery = useQuery(saveMethodsQueryOption());

  return {
    cityData: cityDataQuery.data,
    foodType: foodTypeDataQuery.data,
    saveMethod: saveMethodDataQuery.data,
    isPending:
      cityDataQuery.isPending ||
      foodTypeDataQuery.isPending ||
      saveMethodDataQuery.isPending,
  };
};

export default useFormSelectOptions;
