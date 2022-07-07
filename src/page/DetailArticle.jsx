import React from "react";
import { api } from "../shared/api";
import Vote from "../components/DetailArticle/Vote";
import WriteComment from "../components/DetailArticle/WriteComment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import Title from "../components/DetailArticle/collection/Title";
import Writing from "../components/DetailArticle/collection/Writing";
import Stocks from "../components/DetailArticle/collection/Stocks";
import View from "../components/DetailArticle/collection/View";
import Comment from "../components/DetailArticle/collection/Comment";
import { useParams } from "react-router-dom";
import { useDetailArticleGet } from "../components/DetailArticle/useDetailArticle";

const DetailArticle = () => {
  const { id } = useParams();
  //게시글 가져오기
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useDetailArticleGet.useContentInquiry(id);
  //게시글삭제
  const { mutate } = useDetailArticleMutate.useDeletePost();

  return (
    <>
      <TotalArticleHeader />
      <Container>
        <Title stockName={data.stockName} />
        <BtnBox>
          <Btn>목록</Btn>
          <Btn
            onClick={() => {
              const data = { postId: id }; //게시글에 대한 데이터 넣기
              mutate(data);
            }}
          >
            게시글 삭제
          </Btn>
          <Btn>수정</Btn>
        </BtnBox>
        <Writing
          date={data.createdAt}
          view={data.viewCount}
          stockName={data.stockName}
          articleTitle={data.articleTitle}
        />
        <hr />
        <Stocks date={data.createdAt} />
        <View
          content1={data.content1}
          content2={data.content2}
          content3={data.content3}
          point1={data.point1}
          point2={data.point2}
          point3={data.point3}
        />
        <Vote id={id} voteUp={data.voteUpCount} voteDown={data.voteDownCount} />
        <Comment id={id} />
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
