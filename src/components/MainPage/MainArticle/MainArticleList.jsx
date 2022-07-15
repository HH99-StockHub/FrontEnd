//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import MainArticleCard from "./MainArticleCard";
// 커스텀 훅
import { useMainPageQuery } from "../useMainPageQuery";
import useChangeNum from "../../../custom/changeNum";

const MainArticleList = () => {
  const changeNum = useChangeNum;
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
        <p style={{ width: "244px" }}>제목</p>
        <p style={{ width: "56px" }}>추천</p>
        <p style={{ width: "56px" }}>비추천</p>
        <p style={{ width: "64px" }}>조회수</p>
        <p style={{ width: "64px" }}>날짜</p>
        <p style={{ width: "64px" }}>닉네임</p>
      </THead>
      {isLoading && <LoadingSpinner />}

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
    </Table>
  );
};

export default MainArticleList;

const Table = styled.div`
  position: relative;
  min-height: 400px;
`;
const THead = styled.div`
  display: flex;
  padding: 12px 20px;
  border-radius: 6px 6px 0 0;
  text-align: left;
  background-color: #5aa9c2;
  font-size: 12px;
`;
