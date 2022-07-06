import React from "react";
import styled from "styled-components";

const Writing = () => {
  return (
    <>
      <Box>
        <Sam>
          <h3>삼성전자</h3>
          <p>삼성전자 매수한 사람 모두 모여보세요</p>
        </Sam>
        <Div>
        <P>날짜 22.06.30</P>
        <P>조회 300,000</P>
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
