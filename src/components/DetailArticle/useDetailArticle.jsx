import { api } from "../../shared/api";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { toastify } from "../../custom/toastify";

export const useDetailArticleMutate = {
  //추천투표
  useVoteUpMutation: (articleId) => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/articles/${payload.postId}/up`, {
        voteUpId: payload.voteUpId,
      });
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries(["voteSign", articleId]);
        queryClient.invalidateQueries(["ContentInquiry", articleId]);
        queryClient.invalidateQueries("rank");
        toastify.success("투표 완료");
      },
      onError: (data) => {
        if (data.response.data.error === "403") {
          toastify.error(data.response.data.message);
        }
      },
    });
  },
  //비추천 투표
  useVoteDownMutation: (articleId) => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/articles/${payload.postId}/down`, {
        voteDownId: payload.voteDownId,
      });
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries(["voteSign", articleId]);
        queryClient.invalidateQueries(["ContentInquiry", articleId]);
        toastify.success("투표 완료");
      },
      onError: (data) => {
        if (data.response.data.error === "403") {
          toastify.error(data.response.data.message);
        }
      },
    });
  },
  //댓글 작성
  useWriteComment: (option) => {
    const fetcher = async ({ write, id }) => {
      const { data } = await api.post(`/articles/${id}/comment`, {
        comments: write,
      });
      return data;
    };
    return useMutation(fetcher, option);
  },
  //댓글 삭제
  useDeleteComment: (articleId) => {
    const queryClient = useQueryClient();
    const fetcher = async (commentId) => {
      await api.delete(`/comments/${commentId}`);
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries("rank");
        queryClient.invalidateQueries(["CommentInquiry", articleId]);
        toastify.success("댓글 삭제 완료");
      },
      onError: (data, error, variables, context) => {
        toastify.error("삭제 권한이 없습니다.");
      },
    });
  },
  //게시글 삭제
  useDeletePost: () => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.delete(`/articles/${payload.postId}`);
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries("rank");
        queryClient.invalidateQueries("ContentInquiry");
        toastify.success("게시글 삭제 완료");
      },
      onError: (err) => {
        toastify.error("삭제 권한이 없습니다.");
      },
    });
  },
};

export const useDetailArticleGet = {
  //게시글 내용조회
  useContentInquiry: (articleId) => {
    const fetcher = async () => {
      const { data } = await api.get(`/articles/${articleId}`);
      return data;
    };
    return useQuery(["ContentInquiry", articleId], fetcher);
  },
  //게시글 댓글 목록 조회
  useCommentInquiry: (articleId) => {
    const fetcher = async () => {
      const { data } = await api.get(`/articles/${articleId}/comments`);
      return data;
    };
    return useQuery(["CommentInquiry", articleId], fetcher);
  },
  //종목 뉴스 검색
  useNewsSearch: (payload) => {
    const fetcher = async () => {
      if (payload !== undefined) {
        const { data } = await api.get(`/article/news?stockName=${payload}`);
        return data;
      }
    };
    return useQuery(["NewsSearch", payload], fetcher);
  },
  // 주가 상세 정보 가져오기
  useGetDetailStock: (stockName) => {
    const fetcher = async () => {
      const response = api.get(`/stock/details/${stockName}`);
      return response;
    };
    return useQuery(["stockDetail", stockName], fetcher);
  },
  // voteSign
  useGetVoteSign: (articleId) => {
    const fetcher = async () => {
      const response = api.post(`articles/${articleId}/voteSign`);
      return response;
    };
    return useQuery(["voteSign", articleId], fetcher);
  },
};
