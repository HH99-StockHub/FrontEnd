import React from "react";
import styled from "styled-components";
import TotalArticleList from "./TotalArticleList";

const TotalArticleContent = ({ data }) => {
  return (
    <div>
      <Table>
        <WrapTh>
          <div style={{ width: "72px" }}>회사</div>
          <div style={{ width: "660px" }}>제목</div>
          <div style={{ width: "72px" }}>날짜</div>
          <div style={{ width: "72px" }}>조회</div>
          <div style={{ width: "92px" }}>추천</div>
          <div style={{ width: "92px" }}>비추천</div>
          <div style={{ width: "92px" }}>수익률</div>
        </WrapTh>
        <TotalArticleList data={data} />
      </Table>
    </div>
  );
};

export default TotalArticleContent;

const Table = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

const WrapTh = styled.div`
  display: flex;
  gap: 8px;
  padding: 16.5px 0;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  background-color: #ccc;
`;
