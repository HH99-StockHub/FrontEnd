import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// 훅
import useSliceNum from "../../../custom/sliceNum";

const Stocks = (props) => {
  const { date, stockReturn, stockPriceFirst, stockPriceLast } = props;
  const sliceNum = useSliceNum;
  return (
    <Box>
      <Stock1>
        <Stock1div>
          작성시점 주가
          <br />
        </Stock1div>
        <Stock1div2>
          작성날짜 : {dayjs(date).format("YYYY.MM.DD")}
          <P>{sliceNum(stockPriceFirst)} 원</P>
        </Stock1div2>
      </Stock1>
      <Stock2>
        <Stock2div>현재 주가</Stock2div>
        <P1>{sliceNum(stockPriceLast)} 원</P1>
      </Stock2>
      <Stock3>
        대비 수익률
        <P2>{sliceNum(stockReturn)} %</P2>
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
  flex: 6;
  background: #f7f7f7;
  justify-content: space-between;
  color: #7a7a7a;
  padding: 20px;
`;

const Stock1div = styled.div`
  color: #000000;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Stock1div2 = styled.div`
  display: flex;
  color: #b1b1b1;
  margin-bottom: 4px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
`;

const P = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;
const P1 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #008b2f;
  margin-top: 30px;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-top: 30px;
`;

const Stock2 = styled.div`
  flex: 3;
  color: #ffffff;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  color: #000000;
  border: 1px solid #54ba7d;
`;

const Stock2div = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
const Stock3 = styled.div`
  flex: 3;
  background: #54ba7d;
  color: #ffffff;
  padding: 20px;
  justify-content: space-between;
  display: flex;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;

export default Stocks;
