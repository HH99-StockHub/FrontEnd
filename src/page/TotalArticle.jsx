//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
// 컴포넌트
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import TotalArticleBanner from "../components/TotalArticle/TotalArticleBanner";
import TotalArticleContent from "../components/TotalArticle/TotalArticleContent";
import TotalPagenation from "../components/TotalArticle/TotalPagenation";

const TotalArticle = () => {
  return (
    <div>
      <TotalArticleHeader />
      <TotalArticleBanner />
      <TotalArticleContent />
      <TotalPagenation />
    </div>
  );
};

export default TotalArticle;
