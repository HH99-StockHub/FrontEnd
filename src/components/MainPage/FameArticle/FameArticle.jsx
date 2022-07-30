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
        <ArticleHeader title="인기글 TOP3" />
        <FramPopularArticle />
      </div>
      <div>
        <ArticleHeader title="수익왕 TOP3" />
        <FramRichArticle />
      </div>
    </WrapContent>
  );
};

export default FameArticle;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
  }
`;
