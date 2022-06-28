//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import PopularArticleList from "./PopularArticleList";

const PopularArticle = () => {
  return (
    <div>
      <ArticleHeader
        subTitle="인기글 달성을 축하드립니다"
        title="인기글"
        link="/total/popular/articles"
      />
      <WrapCard>
        <PopularArticleList />
      </WrapCard>
    </div>
  );
};

export default PopularArticle;

const WrapCard = styled.div`
  width: 588px;
  height: 288px;
`;
