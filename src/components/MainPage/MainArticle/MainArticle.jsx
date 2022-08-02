import React from "react";
import styled from "styled-components";
import ArticleHeader from "../common/ArticleHeader";
import MainArticleList from "./MainArticleList";

const MainArticle = () => {
  return (
    <WrapBox>
      <ArticleHeader title="전체 게시판" link="/total/all/articles/1" />
      <MainArticleList />
    </WrapBox>
  );
};

export default MainArticle;
const WrapBox = styled.div`
  width: 100%;
`;
