//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
// 컴포넌트
import MainArticleCard from "./MainArticleCard";
// 커스텀 훅
import { useGetMainArticles } from "../../../custom/reactQuery/useQuery";
import styled from "styled-components";

const MainArticleList = () => {
  // 데이터 받기 전 예시 arr
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 데이터 가져오기 query
  // const { data = [], isLoading, isError, error } = useGetMainArticles();

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
      {data.map((v) => {
        return (
          <MainArticleCard
            date={"22-08-07"}
            title={"섬성전자 주식 3개월 전망 분석"}
            user={"btae"}
            watch={"1k"}
            up={22}
            down={0}
          />
        );
      })}
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
