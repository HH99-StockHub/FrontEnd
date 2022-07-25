import React from "react";
//컴포넌트
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import MainArticleCard from "./MainArticleCard";

// 훅
import { toastify } from "../../../custom/toastify";
import { useMainPageQuery } from "../useMainPageQuery";

const MainArticleContent = () => {
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
      {data.map((v) => {
        return <MainArticleCard key={v.articleId} data={v} />;
      })}
    </>
  );
};

export default MainArticleContent;
