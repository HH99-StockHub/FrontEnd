import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// 훅
import useSliceNum from "../../../custom/sliceNum";

const Stocks = (props) => {
  const {
    date,
    stockReturn,
    stockPriceFirst,
    stockPriceLast,
    deadline,
    targetReturn,
  } = props;
  const sliceNum = useSliceNum;
  return (
    <Box>
      <Div>
        <Stock1>
          <Stock1div>작성날짜 : {dayjs(date).format("YYYY.MM.DD")}</Stock1div>
          <Stock1div2>
            <PP>작성시점 주가</PP>
            <P>{sliceNum(stockPriceFirst)}</P>
          </Stock1div2>
        </Stock1>
        <Stock1last>
          <Stock1divlast>
            <Stock1divlastdiv>수익률 마감 일자:{deadline}</Stock1divlastdiv>
          </Stock1divlast>
          <Stock1div22>
            <P4>목표 금액</P4>
            <P3>{sliceNum(targetReturn)}</P3>
          </Stock1div22>
        </Stock1last>
      </Div>
      <PriceDiv>
        <Stock2>
          <Stock2div>현재 가</Stock2div>
          <P1>{sliceNum(stockPriceLast)}</P1>
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
  color: var(--white);
  @media screen and (max-width: 1100px) {
    width: 100%;
    color: var(--white);
    text-align: center;
  } ;
`;

const Box = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  } ;
`;

const Stock1 = styled.div`
  width: 100%;
  width: 226px;
  background: #f7f7f7;
  justify-content: space-between;
  color: #7a7a7a;
  /* padding: 13px; */
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    width: 620px;
    padding: 0px;
    > div {
      height: 50%;
      padding: 14px 11px;
    }
  }
`;

const Stock1div = styled.div`
  color: var(--white);
  text-align: center;
  padding: 8px;
  background-color: var(--green1);
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  @media screen and (max-width: 1100px) {
    color: var(--white);
    background: var(--green1);
    width: 100%;
    text-align: center;
  } ;
`;

const Stock1last = styled.div`
  width: 251px;
  background: var(--white);
  border: 1px solid var(--green1);
  color: #7a7a7a;
  @media screen and (max-width: 1100px) {
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
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  background: var(--green1);
  padding: 8px;
  text-align: center;
  @media screen and (max-width: 1100px) {
    color: var(--white);
    background: var(--green1);
  } ;
`;

const Stock1div2 = styled.div`
  display: flex;
  color: var(--gray3);
  padding: 8px;
  margin-bottom: 4px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
`;

const Stock1div22 = styled.div`
  display: flex;
  padding: 8px;
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

const PP = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--black);
`;
const P1 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);
  display: flex;
  justify-content: flex-end;
  margin-top: 19px;
  @media screen and (max-width: 1100px) {
    margin-top: 0;
  } ;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--white);
  display: flex;
  justify-content: flex-end;
  margin-top: 19px;
  @media screen and (max-width: 1100px) {
    margin-top: 0;
  } ;
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
  padding: 0 13px;
  @media screen and (max-width: 1100px) {
    width: 620px;
    display: flex;
    align-items: center;
  } ;
`;

const Stock2div = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  @media screen and (max-width: 1100px) {
    margin-top: 0;
    padding: 10px 0;
  } ;
`;
const Stock3 = styled.div`
  width: 122px;
  background: var(--green2);
  color: var(--white);
  font-weight: 700;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
  padding: 0 13px;
  @media screen and (max-width: 1100px) {
    width: 620px;
    display: flex;
    align-items: center;
  } ;
`;

export default Stocks;
