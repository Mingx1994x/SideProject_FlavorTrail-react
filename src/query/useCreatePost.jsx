import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from './api/post';
import { postQueriesKey } from './handleQueryOption';

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(postQueriesKey.all);
    },
  });
};

export default useCreatePost;
