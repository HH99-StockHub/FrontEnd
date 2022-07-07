import React from "react";
import styled from "styled-components";
import View from './View';

const Writing = (props) => {
  const {date,view,stockName , articleTitle} = props
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
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px 0px;
`;

const Sam = styled.div`
  display: flex;
  font-size: 16px;
  gap: 10px;
`;

const Div = styled.div`
display: flex;
gap: 20px;
`;

const P = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 15px;
`;

export default Writing;
