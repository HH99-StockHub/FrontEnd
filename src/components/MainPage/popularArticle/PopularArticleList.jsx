//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
// 훅
import { useGetPopularArticles } from "../../../custom/reactQuery/useQuery";

const PopularArticleList = () => {
  // 데이터 받기 전 예시 arr
  const data = [1, 2, 3, 4, 5, 6];
  // 인기 게시글 데이터 받기
  // const { data = [], isLoading, isError, error } = useGetPopularArticles();

  return (
    <ArticleBox>
      {data.map((v) => {
        return <WrapCard></WrapCard>;
      })}
    </ArticleBox>
  );
};

export default PopularArticleList;

const ArticleBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 20px;
  width: 588px;
  border: 1px solid #000;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 179px;
  height: 112px;
  padding: 10px 12px;
  border: 1px solid #000;
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
