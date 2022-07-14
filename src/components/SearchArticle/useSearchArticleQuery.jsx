import { api } from "../../shared/api";
import { useQuery } from "react-query";
export const useGetSearchArticle = {
  useGetSearchKeyword: (category, keyword) => {
    const fetcher = async () => {
      switch (category) {
        case "keyword":
          const { data: search } = await api.get(`/articles/${keyword}/search`);
          return search;
        default:
          const { data: user } = await api.get(`/user/${keyword}/articles`);
          return user;
      }
    };
    return useQuery(["searchArticle", category, keyword], fetcher);
  },
};
