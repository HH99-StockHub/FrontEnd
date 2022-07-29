import { api } from "../../shared/api";
import { useQuery } from "react-query";

export const useTotalPageQuery = {
  // ALL 카테고리 별로 게시글 가져오기
  useGetAllArticles: (category, page) => {
    const fetcher = async () => {
      const { data } = await api.get(
        `/${category}/articles?page=${page}&size=12`,
      );
      return data;
    };

    return useQuery(["allArticle", category, page], fetcher, {
      refetchOnWindowFocus: false,
    });
  },
};
