import React from "react";
import { api } from "../../shared/api";
import { useMutation, useQueryClient, useQuery } from "react-query";

export const useDetailArticleMutate = {
  //찬성투표
  useVoteUpMutation: () => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/articles/${payload.postId}/up`, {
        voteUpId: payload.voteUpId,
      });
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("투표 완료");
      },
      onError: (err) => {
        alert("이미 찬성 투표를 하였습니다.");
      },
    });
  },
  //반대 투표
  useVoteDownMutation: () => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/articles/${payload.postId}/down`, {
        voteDownId: payload.voteDownId,
      });
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("투표완료");
      },
      onError: (err) => {
        alert("이미 반대 투표를 하였습니다.");
      },
    });
  },
  //댓글 작성
  useWriteComment: () => {
    const Write_input = React.useRef("");
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/articles/${payload.articleId}/comment`, {
        comment: payload.comment,
      });
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        Write_input.current.value = "";
        alert("댓글 작성 완료");
      },
      onError: (err) => {
        alert("댓글 내용은 300자 이내로 작성해 주세요.");
      },
    });
  },
  //댓글 삭제
  useDeleteComment: () => {
    const queryClient = useQueryClient();
    const fetcher = async (payload) => {
      await api.post(`/comments/${payload.commentId}`);
    };
    return useMutation(fetcher, {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("댓글 삭제 완료");
      },
      onError: (err) => {
        alert("삭제 권한이 없습니다.");
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
        queryClient.invalidateQueries();
        alert("게시글 삭제 완료");
      },
      onError: (err) => {
        alert("삭제 권한이 없습니다.");
      },
    });
  },
};

export const useDetailArticleGet = {
  //게시글 내용조회
  useContentInquiry: ({ articleId }) => {
    const fetcher = async () => {
      const { data } = await api.get(`/articles/${articleId}`);
      return data;
    };
    return useQuery("ContentInquiry", fetcher);
  },
  //게시글 댓글 목록 조회
  useCommentInquiry: ({ articleId }) => {
    const fetcher = async () => {
      const { data } = await api.get(`/articles/${articleId}/comments`);
      return data;
    };
    return useQuery(["CommentInquiry", articleId], fetcher);
  },
};
