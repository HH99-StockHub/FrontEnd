//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// 컴포넌트
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import TotalArticleBanner from "../components/TotalArticle/TotalArticleBanner";
import TotalArticleContent from "../components/TotalArticle/TotalArticleContent";
import TotalPagenation from "../components/TotalArticle/TotalPagenation";
import HelmetComponents from "../repeat/HelmetComponents";
// query 훅
import { useTotalPageQuery } from "../components/TotalArticle/useTotalPageQuery";

const TotalArticle = () => {
  // 카테고리별 meta title 변경
  const [titleCategory, setTitleCategory] = useState("");
  // URL 정보가져오기
  const { category, page } = useParams();
  // useQuery
  const { data = [] } = useTotalPageQuery.useGetAllArticles(category, "page");

  useEffect(() => {
    switch (category) {
      case "all":
        setTitleCategory("전체 게시판");
        break;
      case "popular":
        setTitleCategory("인기 게시판");
        break;
      case "rich":
        setTitleCategory("수익왕 게시판");
        break;
      case "user":
        setTitleCategory("내 게시판");
        break;
      default:
        break;
    }
  }, [category]);
  return (
    <div>
      <HelmetComponents title={`${titleCategory}`} />
      <TotalArticleHeader />
      <TotalArticleBanner />
      <TotalArticleContent data={data} />
      <TotalPagenation category={category} nowPage={page} />
    </div>
  );
};

export default TotalArticle;
