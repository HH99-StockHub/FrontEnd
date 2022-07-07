import React from "react";
import styled from "styled-components";


const Title = (props) => {
  const {stockName} = props
  return (
    <>
      <Box>
        <Name>
          <P>{stockName}</P>
          <p>8,400</p>
        </Name>
        <Market>
          <Box1>
            <Stock1>전일 78,000</Stock1>
            <Stock2>고가 78,000</Stock2>
            <Stock3>거래량 78,000(161%)</Stock3>
          </Box1>
          <Box1>
            <Stock1>시가 78,000</Stock1>
            <Stock2>저가 78,000</Stock2>
            <Stock3>거래대금 78,000(161%)</Stock3>
          </Box1>
        </Market>
      </Box>
    </>
  );
};

const P = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 19px;`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  
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
`;

const Stock1 = styled.div`
  flex: 3;
  color: #7a7a7a;
  padding: 13px;
  margin-left: 10px;
`;
const Stock2 = styled.div`
  flex: 3;
  color: #7a7a7a;
  padding: 13px;
  margin-left: 10px;
`;
const Stock3 = styled.div`
  flex: 3;
  color: #7a7a7a;
  padding: 13px;
  margin-left: 10px;
`;

export default Title;

//간격은
