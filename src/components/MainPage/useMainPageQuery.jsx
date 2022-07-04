import { api } from "../../shared/api";
import { useQuery } from "react-query";

export const useMainPageQuery = {
  // 메인 전체 게시글
  useGetMainArticles: () => {
    const fetcher = async () => {
      const { data } = await api.get("/main/articles");
      return data;
    };

    return useQuery(["allArticle", "mainArticles"], fetcher);
  },
  // 명예의 전당 인기/수익
  useGetFamePopularArticle: () => {
    const fetcher = async () => {
      const { data } = await api.get("/main/fame/popular/articles");
      return data;
    };
    return useQuery("popularFameArticles", fetcher);
  },
  useGetFameRichArticle: () => {
    const fetcher = async () => {
      const { data } = await api.get("/main/fame/rich/articles");
      return data;
    };
    return useQuery("richFameArticles", fetcher);
  },
  // 메인 수익 게시글
  useGetRichArticles: () => {
    const fetcher = async () => {
      const { data } = await api.get("/main/rich/articles");
      return data;
    };
    return useQuery("richArticles", fetcher);
  },
  // 메인 인기 게시글
  useGetPopularArticles: () => {
    const fetcher = async () => {
      const { data } = await api.get("/main/popular/articles");
      return data;
    };
    return useQuery("popularArticles", fetcher);
  },
};
