//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// 컴포넌트
import MainArticleContent from "./MainArticleContent";

const MainArticleList = () => {
  //media
  const isMiddle = useMediaQuery({
    query: "(max-width:1260px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width:700px)",
  });
  console.log(isSmall);
  return (
    <Table>
      {isMiddle ? (
        <>
          {isSmall ? (
            <THead>
              <p style={{ width: "80px" }}>종목</p>
              <p style={{ width: "60%" }}>제목</p>
              <p style={{ width: "34px" }}>추천</p>
            </THead>
          ) : (
            <THead>
              <p style={{ width: "80px" }}>종목</p>
              <p style={{ width: "60%" }}>제목</p>
              <p style={{ width: "56px" }}>글쓴이</p>
              <p style={{ width: "56px" }}>날짜</p>
              <p style={{ width: "56px" }}>조회</p>
              <p style={{ width: "56px" }}>추천</p>
            </THead>
          )}
        </>
      ) : (
        <>
          <THead>
            <p style={{ width: "80px" }}>종목</p>
            <p style={{ width: "252px" }}>제목</p>
            <p style={{ width: "56px" }}>글쓴이</p>
            <p style={{ width: "56px" }}>날짜</p>
            <p style={{ width: "56px" }}>조회</p>
            <p style={{ width: "56px" }}>추천</p>
          </THead>
        </>
      )}

      <MainArticleContent />
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
  background-color: var(--blue1);
  font-size: 12px;
  color: var(--white);
  p {
    text-align: right;
    &:first-child,
    &:nth-child(2) {
      text-align: left;
    }
  }
`;
