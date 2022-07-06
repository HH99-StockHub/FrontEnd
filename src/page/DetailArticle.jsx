import React from "react";
import Vote from "../components/DetailArticle/Vote";
import { useDetailArticleMutate } from "../components/DetailArticle/useDetailArticle";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import styled from "styled-components";
import Title from "../components/DetailArticle/collection/Title";
import Writing from "../components/DetailArticle/collection/Writing";
import Stocks from "../components/DetailArticle/collection/Stocks";
import View from "../components/DetailArticle/collection/View";
import Comment from "../components/DetailArticle/collection/Comment";
import { useParams } from 'react-router-dom';



const DetailArticle = () => {
  const {id} = useParams()
  //게시글삭제
  const { mutate } = useDetailArticleMutate.useDeletePost()

  return (
    <>
    <TotalArticleHeader />
    <Container>
      <Title />
      <BtnBox>
        <Btn>목록</Btn>
        <Btn
          onClick={() => {
            const data = {postId:id}; //게시글에 대한 데이터 넣기
            mutate(data);
          }}
        >
          게시글 삭제
        </Btn>
        <Btn>수정</Btn>
      </BtnBox>
      <Writing />
      <hr />
      <Stocks />
      <View />
      <Vote id={id} />
      <Comment />
    </Container>
    </>
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
  padding: 10px;
  background: #eaeaea;
`;
export default DetailArticle;
