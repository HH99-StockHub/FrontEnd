import { api } from "../../shared/api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
// 모듈
import { addArticleState } from "../../state/client/modal";
// 훅
import { toastify } from "../../custom/toastify";

export const useAddArticleFormMutate = {
  useAddArticleMutation: () => {
    const setFormState = useSetRecoilState(addArticleState);
    const queryClient = useQueryClient();
    const fetcher = async (article) => {
      const { data } = await api.post("/article", article);
      return data;
    };
    return useMutation(fetcher, {
      onSuccess: (data) => {
        if (data) {
          queryClient.invalidateQueries(["allArticle"]);
          queryClient.invalidateQueries("rank");
          toastify.success("작성 완료");
          setFormState(false);
        } else {
          toastify.error("비속어 금지");
        }
      },
      onError: (data) => {
        if (
          data.response.status === 400 ||
          data.response.status === 404 ||
          data.response.status === 406 ||
          data.response.status === 411
        ) {
          toastify.error(data.response.data.message);
        } else {
          toastify.error("저장에 실패했습니다. 다시 시도해주세요");
        }
      },
    });
  },
  useGetArticleStock: (option) => {
    const fetcher = async (article) => {
      const response = await api.post(`/stock/price`, article);
      return response;
    };
    return useMutation(fetcher, option);
  },
};

export const useAddArticleFormQuery = {
  useGetStockName: () => {
    const fetcher = async () => {
      const { data } = await api.get("/stocks");
      return data;
    };
    return useQuery("stockName", fetcher, {
      staleTime: 1000 * 60 * 30,
      cacheTime: 1000 * 60 * 30,
    });
  },
};
