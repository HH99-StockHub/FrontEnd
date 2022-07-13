import { api } from "../../shared/api";
import { useQuery } from "react-query";

export const useTotalPageQuery = {
  // ALL 카테고리 별로 게시글 가져오기
  useGetAllArticles: (category, page) => {
    const fetcher = async () => {
      const { data } = await api.get(`/${category}/articles`);
      return data;
    };

    return useQuery(["allArticle", category, page], fetcher);
  },
  // 유저 게시글 정보
  useGetAllUserArticles: ({ userId }) => {
    const fetcher = async () => {
      const { data } = await api.get(`/user/${userId}/articles`);
      return data;
    };
    return useQuery(["allArticle", "allUserArticles"], fetcher);
  },
  //게시글 검색
  useGetAllArticlesSearch: (payload) => {
    const fetcher = async () => {
      const { data } = await api.get(`articles/${payload.keywords}/search`);
      return data;
    };
    return useQuery("keywords", fetcher);
  },
  // //종목 뉴스 검색
  // useGetNewsSearch:
};
