import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
// 모듈
import { togleState } from "../../redux/modules/toggleState";

export const useAddArticleFormMutate = {
  useAddArticleMutation: () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const fetcher = async (article) => {
      const { data } = await api.post("/article", article);
      return data;
    };
    return useMutation(fetcher, {
      onSuccess: (data) => {
        if (data) {
          queryClient.invalidateQueries("allArticle");
          alert("작성 완료");
          dispatch(togleState(false));
        } else {
          alert("비속어 금지");
        }
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
