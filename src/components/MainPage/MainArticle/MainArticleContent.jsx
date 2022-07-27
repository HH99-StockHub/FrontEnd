import React from "react";
//컴포넌트
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import MainArticleCard from "./MainArticleCard";

// 훅
import { toastify } from "../../../custom/toastify";
import { useMainPageQuery } from "../useMainPageQuery";
import { useMediaQuery } from "react-responsive";

const MainArticleContent = () => {
  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 700px)",
  });
  // 전체 게시물 데이터 query
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetMainArticles();

  if (isError) toastify.error("전체 게시물 불러오기를 실패했습니다.");
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {isSmall
        ? data.slice(0, 5).map((v) => {
            return <MainArticleCard key={v.articleId} data={v} />;
          })
        : data.map((v) => {
            return <MainArticleCard key={v.articleId} data={v} />;
          })}
    </>
  );
};

export default MainArticleContent;
