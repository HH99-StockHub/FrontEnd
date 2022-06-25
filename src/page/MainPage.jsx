//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
// 컴포넌트
import MainArticle from "../components/MainPage/MainArticle/MainArticle";
import PopularArticle from "../components/MainPage/popularArticle/PopularArticle";

const MainPage = () => {
  return (
    <div>
      <MainArticle />
      <PopularArticle />
    </div>
  );
};

export default MainPage;
