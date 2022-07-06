import React from 'react'
import styled from "styled-components";

const Stocks = () => {
  return (
    <Box>
        <Stock1>2022.06.30 작성 시점 주가</Stock1>
        <Stock2>현재 주가</Stock2>
        <Stock3>대비 수익률</Stock3>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Stock1 = styled.div`
    flex: 4;
    background: #F3F3F3;
    color: #7A7A7A;
    padding: 10px;
`
const Stock2 = styled.div`
    flex: 4;
    background: #515151;
    color: #FFFFFF;
    padding: 10px;
`
const Stock3 = styled.div`
    flex: 2;
    background: #1B1B1B;
    color: #FFFFFF;
    padding: 10px;
`

export default Stocks