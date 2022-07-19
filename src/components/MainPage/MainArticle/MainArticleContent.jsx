import React from "react";
//컴포넌트
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import MainArticleCard from "./MainArticleCard";

// 훅
import useChangeNum from "../../../custom/changeNum";
import { toastify } from "../../../custom/toastify";
import { useMainPageQuery } from "../useMainPageQuery";

const MainArticleContent = () => {
  const changeNum = useChangeNum;
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
        return (
          <MainArticleCard
            key={v.articleId}
            date={v.createdAt}
            title={v.articleTitle}
            user={v.nickname}
            watch={changeNum(v.viewCount)}
            up={changeNum(v.voteUpCount)}
            down={changeNum(v.voteDownCount)}
            articleId={v.articleId}
            userId={v.userId}
          />
        );
      })}
    </>
  );
};

export default MainArticleContent;
