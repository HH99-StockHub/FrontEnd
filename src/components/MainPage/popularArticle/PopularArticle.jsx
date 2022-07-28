//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import PopularArticleList from "./PopularArticleList";

const PopularArticle = () => {
  return (
    <WrapArticle>
      <ArticleHeader title="인기글 게시판" link="/total/popular/articles/1" />
      <WrapCard>
        <PopularArticleList />
      </WrapCard>
    </WrapArticle>
  );
};

export default PopularArticle;
const WrapArticle = styled.div`
  max-width: 588px;
  @media screen and (max-width: 700px) {
    max-width: 500px;
  }
`;

const WrapCard = styled.div`
  width: 100%;
  min-height: 288px;
  margin-bottom: 30px;
`;
