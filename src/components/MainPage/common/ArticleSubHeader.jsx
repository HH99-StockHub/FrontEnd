import React from "react";
import styled from "styled-components";

const ArticleSubHeader = () => {
  return (
    <SubHeader>
      방구석 애널리스트 <span>'StockHub'</span>입니다. 주식 전망글을 작성하고
      수익왕이 되는 그 날을 응원합니다!
    </SubHeader>
  );
};

export default ArticleSubHeader;

const SubHeader = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 52px;
  padding: 26px 0;
  width: 1200px;
  text-align: center;
  font-size: 16px;
  background-color: #f1f1f1;
  span {
    font-weight: 700;
  }
`;
