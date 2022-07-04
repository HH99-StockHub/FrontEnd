import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

// // Queries
// const query = useQuery("todos", getTodos);

export const useGetAllUserArticles = ({ userId }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/user/${userId}/articles`);
    return data;
  };
  return useQuery(["allArticle", "allUserArticles"], fetcher);
};

//게시글 내용조회
export const useContentInquiry = ({ articleId }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/articles/${articleId}`);
    return data;
  };
  return useQuery("ContentInquiry", fetcher);
};

//게시글 주식종목 조회
export const useStocksInquiry = ({ articleId }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/articles/${articleId}/stock`);
    return data;
  };
  return useQuery("StocksInquiry", fetcher);
};

//게시글 댓글 목록 조회
export const useCommentInquiry = ({ articleId }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/articles/${articleId}/comments`);
    return data;
  };
  return useQuery(["CommentInquiry", articleId], fetcher);
};

// // Mutations
// const queryClient = useQueryClient();
// const mutation = useMutation(postTodo, {
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries("todos");
//   },
// });
