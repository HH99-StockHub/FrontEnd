//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import PopularArticleList from "./PopularArticleList";

const PopularArticle = () => {
  return (
    <WrapBox>
      <ArticleHeader title="인기 게시글" link="popular" />
      <PopularArticleList />
    </WrapBox>
  );
};

export default PopularArticle;

const WrapBox = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid #000;
`;
