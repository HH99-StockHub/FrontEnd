//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import MainArticleCard from "./MainArticleCard";
// 커스텀 훅
import { useMainPageQuery } from "../useMainPageQuery";

const MainArticleList = () => {
  // 데이터 가져오기 query
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useMainPageQuery.useGetMainArticles();

  return (
    <Table>
      <THead>
        <tr>
          <th style={{ width: "64px" }}>날짜</th>
          <th style={{ width: "226px" }}>제목</th>
          <th style={{ width: "94px" }}>닉네임</th>
          <th style={{ width: "60px" }}>조회수</th>
          <th style={{ width: "72px" }}>추천</th>
          <th style={{ width: "72px" }}>비추천</th>
        </tr>
      </THead>
      <tbody>
        {data.map((v) => {
          return (
            <MainArticleCard
              key={v.articleId}
              date={v.createdAt}
              title={v.articleTitle}
              user={v.nickname}
              watch={v.viewCount}
              up={v.voteUpCount}
              down={v.voteDownCount}
              articleId={v.articleId}
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default MainArticleList;

const Table = styled.table`
  border-collapse: collapse;
  height: 320px;
`;
const THead = styled.thead`
  text-align: left;
  background-color: var(--grey);
  font-size: 12px;
  tr {
    th {
      padding: 8px 0 8px 8px;
    }
  }
`;
