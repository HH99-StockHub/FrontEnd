import React from "react";
import styled from "styled-components";
import View from "./View";

const Writing = (props) => {
  const { date, view, stockName, articleTitle } = props;
  return (
    <>
      <Box>
        <Sam>
          <h3>{stockName}</h3>
          <p>{articleTitle}</p>
        </Sam>
        <Div>
          <P>날짜 {date}</P>
          <P>조회 {view}</P>
        </Div>
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  padding: 20px 0px;
`;
export default Writing;
