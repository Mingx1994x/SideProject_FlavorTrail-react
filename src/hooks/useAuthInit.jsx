import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { queryKeys } from '../data/queryKeys';
import { checkout } from '../query/api/auth';
import { setAuthChecked, setLogin, setLogout } from '../redux/AuthStateSlice';

export const useAuthInit = () => {
  const dispatch = useDispatch();
  const { data, isSuccess, isError } = useQuery({
    queryKey: [queryKeys.auth],
    queryFn: checkout,
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        setLogin({
          id: data.user.id,
          nickname: data.user.nickname,
        }),
      );
      dispatch(setAuthChecked());
    }

    if (isError) {
      dispatch(setLogout());
      dispatch(setAuthChecked());
    }
  }, [isSuccess, isError, data, dispatch]);
};
