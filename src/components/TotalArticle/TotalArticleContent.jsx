import React from "react";
import styled from "styled-components";
import TotalArticleList from "./TotalArticleList";

const TotalArticleContent = () => {
  return (
    <div>
      <Table>
        <tr>
          <th>회사</th>
          <th>제목</th>
          <th>날짜</th>
          <th>조회</th>
          <th>추천</th>
          <th>비추천</th>
          <th>수익률</th>
        </tr>
        <TotalArticleList />
      </Table>
    </div>
  );
};

export default TotalArticleContent;

const Table = styled.table`
  width: 800px;
  margin: 0 auto;
  text-align: left;
`;
