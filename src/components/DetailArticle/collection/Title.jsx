import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <>
      <Box>
        <Name>
          <p>삼성전자</p>
          <p>data</p>
        </Name>
        <Market>
          <p>전일</p>
          <p>시가</p>
        </Market>
      </Box>
    </>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Name = styled.div`
  flex: 3;
  background: #535353;
  color: white;
  padding: 15px;
`;
const Market = styled.div`
  flex: 7;
  border: 1px solid #eee;
  padding: 15px;
`;



export default Title;

//간격은
