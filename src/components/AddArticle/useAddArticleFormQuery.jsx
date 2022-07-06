import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

export const useAddArticleFormMutate = {
  useAddArticleMutation: () => {
    const queryClient = useQueryClient();
    const fetcher = async (article) => {
      await api.post("/article", article);
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries("allArticle");
        alert("작성 완료");
      },
      onError: (err) => {
        alert("에러가 발생했습니다.");
      },
    });
  },
};
