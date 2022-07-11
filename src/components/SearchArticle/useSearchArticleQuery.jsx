import { api } from "../../shared/api";
import { useQuery } from "react-query";
export const useGetSearchArticle = {
  useGetSearchKeyword: (category, keyword) => {
    const fetcher = async () => {
      switch (category) {
        case "keyword":
          const { user: search } = await api.get(`/articles/${keyword}/search`);
          return search;
        case "user":
          const { data: user } = await api.get(`/user/${keyword}/articles`);
          return user;
        default:
          break;
      }
    };
    return useQuery(["searchArticle", category, keyword], fetcher);
  },
};
