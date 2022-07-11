import React from "react";
// 컴포넌트
import SearchArticleList from "../components/SearchArticle/SearchArticleList";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import SlideStock from "../repeat/SlideStock";

const SearchArticle = () => {
  return (
    <div>
      <SlideStock />
      <TotalArticleHeader />
      <SearchArticleList />
    </div>
  );
};

export default SearchArticle;
