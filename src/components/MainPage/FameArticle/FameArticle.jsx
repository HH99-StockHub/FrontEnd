//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import ArticleHeader from "../common/ArticleHeader";
// 컴포넌트
import FramPopularArticle from "./FramPopularArticle";
import FramRichArticle from "./FramRichArticle";

const FameArticle = () => {
  return (
    <WrapContent>
      <div>
        <ArticleHeader title="BEST 인기글" />
        <FramPopularArticle />
      </div>
      <div>
        <ArticleHeader title="BEST 수익왕" />
        <FramRichArticle />
      </div>
    </WrapContent>
  );
};

export default FameArticle;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58px;
  width: 558px;
`;
