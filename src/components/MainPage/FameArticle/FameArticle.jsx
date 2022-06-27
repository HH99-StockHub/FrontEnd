//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import ArticleFameHeader from "./FameArticleHeader";
import FramPopularArticle from "./FramPopularArticle";
import FramRichArticle from "./FramRichArticle";

const FameArticle = () => {
  return (
    <>
      <ArticleFameHeader title="명예의 전당" />
      <WrapContent>
        <FramPopularArticle />
        <FramRichArticle />
      </WrapContent>
    </>
  );
};

export default FameArticle;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 24px;
  width: 588px;
`;
