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

// 메인 페이지 수익왕 게시글 가져오기
export const useGetRichArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/main/rich/articles");
    return data;
  };
  return useQuery("richArticles", fetcher);
};

// ALL 전체 게시글 가져오기
export const useGetAllMainArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/all/articles");
    return data;
  };

  return useQuery("allMainArticles", fetcher);
};

// ALL 인기 게시글 가져오기
export const useGetAllPopularArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/popular/articles");
    return data;
  };
  return useQuery("allPopularArticles", fetcher);
};

// ALL 수익왕 게시글 가져오기
export const useGetAllRichArticles = () => {
  const fetcher = async () => {
    const { data } = await api.get("/rich/articles");
    return data;
  };
  return useQuery("allRichArticles", fetcher);
};

// ALL 내 게시글 가져오기

export const useGetAllUserArticles = ({ userId }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/user/${userId}/articles`);
    return data;
  };
  return useQuery("allUserArticles", fetcher);
};
// // Mutations
// const queryClient = useQueryClient();
// const mutation = useMutation(postTodo, {
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries("todos");
//   },
// });
