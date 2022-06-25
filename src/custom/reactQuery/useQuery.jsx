import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

// // Queries
// const query = useQuery("todos", getTodos);

// 메인 페이지 전체 게시글 가져오기
export const useGetMainArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/main/articles");
    return data;
  };

  return useQuery("mainArticles", fetcher);
};

// 메인 페이지 인기 게시글 가져오기
export const useGetPopularArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/main/popular/articles");
    return data;
  };
  return useQuery("popularArticles", fetcher);
};

// // Mutations
// const queryClient = useQueryClient();
// const mutation = useMutation(postTodo, {
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries("todos");
//   },
// });
