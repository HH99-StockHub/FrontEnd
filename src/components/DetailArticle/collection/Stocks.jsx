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
        <Stock1div>작성시점 주가</Stock1div>
        <Stock1div2>
          작성날짜 : {dayjs(date).format("YYYY.MM.DD")}
          <P>{sliceNum(stockPriceFirst)} 원</P>
        </Stock1div2>
      </Stock1>
      <Stock1last>
        <Stock1divlast>
          <Stock1divlastdiv>수익률 마감 일자</Stock1divlastdiv>
          <Stock1divlastdiv>목표 금액</Stock1divlastdiv>
        </Stock1divlast>
        <Stock1div2>
          {dayjs(date).format("YYYY.MM.DD")}
          <P3>{sliceNum(stockPriceFirst)} 원</P3>
        </Stock1div2>
      </Stock1last>
      <Stock2>
        <Stock2div>현재 가</Stock2div>
        <P1>{sliceNum(stockPriceLast)} 원</P1>
      </Stock2>
      <Stock3>
        <Stock2div>누적 수익률</Stock2div>
        <P2>{sliceNum(stockReturn)} %</P2>
      </Stock3>
    </Box>
  );
};

const Stock1divlastdiv = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--black);
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;

const Stock1 = styled.div`
  flex: 3;
  background: #f7f7f7;
  justify-content: space-between;
  color: #7a7a7a;
  padding: 13px;
`;

const Stock1div = styled.div`
  color: var(--black);
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Stock1last = styled.div`
  flex: 3;
  background: var(--white);
  border: 1px solid var(--green1);
  justify-content: space-between;
  color: #7a7a7a;
  padding: 13px;
`;

const Stock1divlast = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Stock1div2 = styled.div`
  display: flex;
  color: var(--gray3);
  margin-bottom: 4px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
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
  color: var(--white);
  display: flex;
  justify-content: flex-end;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);
  display: flex;
  justify-content: flex-end;
`;

const P3 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--green2);
`;

const Stock2 = styled.div`
  flex: 2;
  color: var(--white);
  justify-content: space-between;
  color: var(--white);
  background: var(--green1);
  padding: 13px;
`;

const Stock2div = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
const Stock3 = styled.div`
  flex: 1.4;
  background: var(--green1);
  color: var(--white);
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding: 13px;
`;

export default Stocks;
