import React from "react";
import { api } from "../../shared/api";
import Vote from "./Vote";
import WriteComment from "./WriteComment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import Title from "./collection/Title";
import Writing from "./collection/Writing";
import Stocks from "./collection/Stocks";
import View from './collection/View';
import Comment from "./collection/Comment";

//게시글삭제
const useDeletePost = ({ commentId }) => {
  return api.delete(`/articles/${commentId}`);
};

const DetailArticle = () => {
  const queryClient = useQueryClient();

  //게시글삭제
  const { mutate } = useMutation(useDeletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  if (DetailArticle.isLoading) {
    return null;
  }

  return (
    <Container>
      <Title />
      <BtnBox>
        <Btn>목록</Btn>
        <Btn
          onClick={() => {
            const data = {}; //게시글에 대한 데이터 넣기
            mutate(data);
          }}
        >
          게시글 삭제
        </Btn>
        <Btn>수정</Btn>
      </BtnBox>
      <Writing />
      <hr/>
      <Stocks />
      <View />
      <Vote />
      <Comment />
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 20px;
`;

const Btn = styled.button`
 padding: 20px;
`;
export default DetailArticle;
