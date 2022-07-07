import React from "react";
import styled from "styled-components";
import View from "./View";

<<<<<<< HEAD
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
=======
const Writing = () => {
    return (
  <Box>
    <h3>삼성전자</h3>
  </Box>
  )
>>>>>>> main
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
  padding: 20px 0px;
`;
export default Writing;
