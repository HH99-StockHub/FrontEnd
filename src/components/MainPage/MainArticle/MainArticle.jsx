//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import MainArticleList from "./MainArticleList";

const MainArticle = () => {
  return (
    <WrapBox>
      <ArticleHeader title="전체 게시글" link="/total/all/articles" />
      <MainArticleList />
    </WrapBox>
  );
};

export default MainArticle;
const WrapBox = styled.div`
  width: 588px;
  height: 288px;
`;
