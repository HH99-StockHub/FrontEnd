//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import MainArticle from "../components/MainPage/MainArticle/MainArticle";
import PopularArticle from "../components/MainPage/popularArticle/PopularArticle";
import RichArticle from "../components/MainPage/richArticle/RichArticle";
import FameArticle from "../components/MainPage/FameArticle/FameArticle";
import ArticleSubHeader from "../components/MainPage/common/ArticleSubHeader";
import SlideStock from "../repeat/SlideStock";
import HelmetComponents from "../repeat/HelmetComponents";

const MainPage = () => {
  return (
    <>
      <HelmetComponents title={"StockHub"} />
      <ArticleSubHeader />
      <SlideStock />
      <WrapMainContent>
        <div>
          <MainArticle />
          <FameArticle />
        </div>
        <div>
          <PopularArticle />
          <RichArticle />
        </div>
      </WrapMainContent>
    </>
  );
};

export default MainPage;

const WrapMainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
  margin: 0 auto;
  margin-top: 64px;
  @media screen and (max-width: 1260px) {
    gap: 44px;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 64px;
    margin: 0 auto;
    > div {
      max-width: 588px;
      @media screen and (max-width: 1260px) {
        max-width: 90%;
      }
    }
    @media screen and (max-width: 1260px) {
      flex-direction: column;
      gap: 44px;
      margin: 0 auto;
      align-items: center;
      justify-content: center;
    }
  }
`;
