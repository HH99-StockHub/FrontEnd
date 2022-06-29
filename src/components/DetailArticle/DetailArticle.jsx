import React from "react";
import { api } from "../../shared/api";
import Vote from "./Vote";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled  from "styled-components";

//게시글삭제
const useDeletePost = ({ commentId }) => {
  return api.delete(`/articles/${commentId}`);
};

const DetailArticle = () => {
  const queryClient = useQueryClient();

  //게시글삭제
 const {mutate} = useMutation(useDeletePost,{
  onSuccess: () => {
    queryClient.invalidateQueries();
  }
 })

 if(DetailArticle.isLoading){
  return null;
}

  return <div>
    <button onClick={()=>{
      const data = {} //게시글에 대한 데이터 넣기
      mutate(data)
    }}>삭제하기</button>
  </div>;
};

export default DetailArticle;
