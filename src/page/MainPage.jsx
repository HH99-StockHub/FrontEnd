//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import MainArticle from "../components/MainPage/MainArticle/MainArticle";
import PopularArticle from "../components/MainPage/popularArticle/PopularArticle";
import RichArticle from "../components/MainPage/richArticle/RichArticle";
import FameArticle from "../components/MainPage/FameArticle/FameArticle";
import ArticleSubHeader from "../components/MainPage/common/ArticleSubHeader";

const MainPage = () => {
  return (
    <WrapMainContent>
      <ArticleSubHeader />
      <MainArticle />
      <FameArticle />
      <PopularArticle />
      <RichArticle />
    </WrapMainContent>
  );
};

export default MainPage;

const WrapMainContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
