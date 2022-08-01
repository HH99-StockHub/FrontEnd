import React from "react";
import styled from "styled-components";
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
  position: relative;
  min-height: 90vh;
  background: #f5f5f5;
  padding-bottom: 100px;
`;
