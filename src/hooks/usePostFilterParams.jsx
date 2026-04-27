import { useSearchParams } from 'react-router';

const usePostFilterParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filterParams = {
    sort: searchParams.get('sort') || 'all',
    location: searchParams.get('location') || '',
    category: searchParams.get('category') || '',
  };

  const updateParams = (newParams) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      Object.entries(newParams).forEach(([key, value]) => {
        if (!value) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      return params;
    });
  };

  return {
    filterParams,
    updateParams,
  };
};

export default usePostFilterParams;
