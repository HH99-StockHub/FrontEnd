import React from "react";
import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

//댓글작성
const useWriteComment = ({ articleId } , payload) => {
  return api.post(`/articles/${articleId}/comment`,{
    comment : payload.comment
  });
};

//댓글삭제
const useDeleteComment = ({ articleId }) => {
  return api.delete(`/comments/${articleId}`);
};

const WriteComment = () => {
  const queryClient = useQueryClient();
  //댓글작성
  const WriteComment = useMutation(useWriteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  //댓글삭제
  const DeleteComment = useMutation(useDeleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
  return <div>WriteComment</div>;
};

export default WriteComment;
