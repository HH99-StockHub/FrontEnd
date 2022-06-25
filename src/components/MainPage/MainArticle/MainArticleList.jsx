//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
// 컴포넌트
import MainArticleCard from "./MainArticleCard";
// 커스텀 훅
import { useGetMainArticles } from "../../../custom/reactQuery/useQuery";

const MainArticleList = () => {
  // 데이터 받기 전 예시 arr
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 데이터 가져오기 query
  // const { data = [], isLoading, isError, error } = useGetMainArticles();

  return (
    <div>
      {data.map((v) => {
        return <MainArticleCard />;
      })}
    </div>
  );
};

export default MainArticleList;
