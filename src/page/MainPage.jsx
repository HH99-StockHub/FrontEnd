import React from "react";
import styled from "styled-components";
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
  margin-top: 64px;
  @media screen and (max-width: 1260px) {
    gap: 44px;
  }
  > div {
    display: flex;
    flex-direction: row;
    gap: 64px;
    margin: 0 auto;
    > div {
      min-width: 588px;
      max-width: 588px;
      @media screen and (max-width: 1260px) {
        max-width: 90%;
        width: 90%;
        min-width: 0;
      }
    }
    @media screen and (max-width: 1260px) {
      flex-direction: column;
      gap: 44px;
      margin: 0 auto;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }
`;
