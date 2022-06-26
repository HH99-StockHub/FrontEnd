//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
// 컴포넌트
import ArticleHeader from "../common/ArticleHeader";
import MainArticleList from "./MainArticleList";

const MainArticle = () => {
  return (
    <div>
      <ArticleHeader title="전체 게시글" link="/total/all/articles" />
      <MainArticleList />
    </div>
  );
};

export default MainArticle;
