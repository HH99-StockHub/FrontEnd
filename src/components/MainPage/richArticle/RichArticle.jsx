//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import RichArticleList from "./RichArticleList";

const RichArticle = () => {
  return (
    <WrapBox>
      <ArticleHeader
        subTitle="수익왕 달성을 축하드립니다!"
        title="수익왕 게시글"
        link="/total/rich/articles/1"
      />
      <RichArticleList />
    </WrapBox>
  );
};

export default RichArticle;

const WrapBox = styled.div``;
