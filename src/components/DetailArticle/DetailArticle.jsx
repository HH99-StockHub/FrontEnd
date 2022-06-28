import React from "react";
import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled  from "styled-components";

//게시글삭제
const useDeletePost = ({ commentId }) => {
  return api.delete(`/articles/${commentId}`);
};

const DetailArticle = () => {
  const queryClient = useQueryClient();

  //게시글삭제
  const DeletePost = useMutation(useDeletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return <div>sdf</div>;
};

export default DetailArticle;
