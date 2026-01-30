import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createComment } from '@/query/api/post';
import { commentQueriesKey } from '@/query/handleQueryOption';
import AlertModal from '@/components/AlertModal';

const useCreateComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(commentQueriesKey.all);
    },
    onError: (error) => {
      AlertModal.errorMessage({
        title: '連線失敗',
        text: `${error}，請稍後再試`,
      });
    },
  });
};

export default useCreateComment;
