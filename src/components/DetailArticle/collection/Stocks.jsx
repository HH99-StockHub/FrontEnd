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
      <Div>
        <Stock1>
          <Stock1div>작성시점 주가</Stock1div>
          <Stock1div2>
            작성날짜 : {dayjs(date).format("YYYY.MM.DD")}
            <P>{sliceNum(stockPriceFirst)} 원</P>
          </Stock1div2>
        </Stock1>
        <Stock1last>
          <Stock1divlast>
            <Stock1divlastdiv>
              수익률 마감 일자:{dayjs(date).format("YYYY.MM.DD")}
            </Stock1divlastdiv>
          </Stock1divlast>
          <Stock1div22>
            <P4>목표 금액</P4>
            <P3>{sliceNum(stockPriceFirst)} 원</P3>
          </Stock1div22>
        </Stock1last>
      </Div>
      <PriceDiv>
        <Stock2>
          <Stock2div>현재 가</Stock2div>
          <P1>{sliceNum(stockPriceLast)} 원</P1>
        </Stock2>
        <Stock3>
          <Stock2div>누적 수익률</Stock2div>
          <P2>{sliceNum(stockReturn)} %</P2>
        </Stock3>
      </PriceDiv>
    </Box>
  );
};

const Div = styled.div`
  display: flex;
  flex: 6;
  gap: 10px;
`;

const PriceDiv = styled.div`
  display: flex;
  flex: 4;
  gap: 10px;
`;

const Stock1divlastdiv = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--gray3);
  @media screen and (max-width: 1470px) {
    width: 100%;
    color: var(--white);
    text-align: center;
  } ;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @media screen and (max-width: 1470px) {
    flex-direction: column;
  } ;
`;

const Stock1 = styled.div`
  width: 226px;
  background: #f7f7f7;
  justify-content: space-between;
  color: #7a7a7a;
  padding: 13px;
  @media screen and (max-width: 1470px) {
    display: flex;
    flex-direction: column;
    width: 620px;
    padding: 0px;
    > div {
      height: 50%;
      display: flex;
      padding: 14px 11px;
    }
  }
`;

const Stock1div = styled.div`
  color: var(--black);
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  @media screen and (max-width: 1470px) {
    order: 2;
  } ;
`;

const Stock1last = styled.div`
  width: 237px;
  background: var(--white);
  border: 1px solid var(--green1);
  color: #7a7a7a;
  padding: 13px;
  @media screen and (max-width: 1470px) {
    width: 620px;
    padding: 0px;
    > div {
      height: 50%;
      display: flex;
      padding: 14px 11px;
    }
  }
`;

const Stock1divlast = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  @media screen and (max-width: 1470px) {
    color: var(--white);
    background: var(--green1);
  } ;
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
  @media screen and (max-width: 1470px) {
    order: 1;
    color: var(--white);
    background: var(--green1);
  } ;
`;

const Stock1div22 = styled.div`
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

const P4 = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--black);
`;

const Stock2 = styled.div`
  width: 188px;
  color: var(--white);
  justify-content: space-between;
  color: var(--white);
  background: var(--green1);
  padding: 13px;
  @media screen and (max-width: 1470px) {
    width: 620px;
    display: flex;
    align-items: center;
  } ;
`;

const Stock2div = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
const Stock3 = styled.div`
  width: 122px;
  background: var(--green2);
  color: var(--white);
  font-weight: 700;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
  padding: 13px;
  @media screen and (max-width: 1470px) {
    width: 620px;
    display: flex;
    align-items: center;
  } ;
`;

export default Stocks;
