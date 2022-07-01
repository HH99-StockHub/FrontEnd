//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { useParams } from "react-router-dom";
// 컴포넌트
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import TotalArticleBanner from "../components/TotalArticle/TotalArticleBanner";
import TotalArticleContent from "../components/TotalArticle/TotalArticleContent";
import TotalPagenation from "../components/TotalArticle/TotalPagenation";
// query 훅
import { useGetAllArticles } from "../custom/reactQuery/useQuery";

const TotalArticle = () => {
  // URL 정보가져오기
  const { category, page } = useParams();
  // 임시 배열
  const data = [1, 2, 3, 4];
  // useQuery
  // const { data = [] } = useGetAllArticles(category, page);
  return (
    <div>
      <TotalArticleHeader />
      <TotalArticleBanner />
      <TotalArticleContent data={data} />
      <TotalPagenation category={category} nowPage={page} />
    </div>
  );
};

export default TotalArticle;
