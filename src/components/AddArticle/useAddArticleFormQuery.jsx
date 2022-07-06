import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";

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
  useGetArticleStock: (option) => {
    const fetcher = async (article) => {
      const response = await api.get(`/stock/get/${article}`);
      return response;
    };
    return useMutation(fetcher, option);
  },
};
