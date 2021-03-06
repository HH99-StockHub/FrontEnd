import React from "react";
import styled from "styled-components";
// 컴포넌트
import SearchArticleList from "../components/SearchArticle/SearchArticleList";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import SlideStock from "../repeat/SlideStock";

const SearchArticle = () => {
  return (
    <div>
      <SlideStock />
      <WrapContent>
        <TotalArticleHeader />
        <SearchArticleList />
      </WrapContent>
    </div>
  );
};

export default SearchArticle;

const WrapContent = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
`;
