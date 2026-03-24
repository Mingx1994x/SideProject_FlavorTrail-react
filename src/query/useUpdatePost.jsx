import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePost } from './api/post';
import { postQueriesKey } from './handleQueryOption';

const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries(postQueriesKey.detail);
    },
  });
};

export default useUpdatePost;
