import React from "react";
import styled from "styled-components";

const Stocks = (props) => {
  const { date } = props;
  return (
    <Box>
      <Stock1>
        {date} 작성 시점 주가
        <P>84,000</P>
      </Stock1>
      <Stock2>
        현재 주가
        <P>96,000</P>
      </Stock2>
      <Stock3>
        대비 수익률
        <P>15%</P>
      </Stock3>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Stock1 = styled.div`
  flex: 4;
  background: #f3f3f3;
  color: #7a7a7a;
  padding: 10px;
`;
const Stock2 = styled.div`
  flex: 4;
  background: #515151;
  color: #ffffff;
  padding: 10px;
`;
const Stock3 = styled.div`
  flex: 2;
  background: #1b1b1b;
  color: #ffffff;
  padding: 10px;
`;

export default Stocks;
