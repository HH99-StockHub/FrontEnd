import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
//컴포넌트
import LineChart from "../../Chart/LineChart";
//모듈
import { showChart } from "../../../state/client/modal";

const TitleGraph = (props) => {
  const { stockName } = props;
  const setChartModal = useSetRecoilState(showChart);

  return (
    <MarketDiv>
      <MarketB>
        <MarkeTT>일일 그래프</MarkeTT>
        <MarketGp
          onClick={() => {
            setChartModal(true);
          }}
        >
          그래프 보기
        </MarketGp>
      </MarketB>
      <Market>
        {stockName !== undefined ? <LineChart stockName={stockName} /> : null}
      </Market>
    </MarketDiv>
  );
};

const MarketDiv = styled.div`
  padding: 24px 0px;
  @media screen and (max-width: 1100px) {
    width: 528px;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  } ;
`;

const MarketB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MarkeTT = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--black);
`;

const MarketGp = styled.button`
  background: var(--green1);
  padding: 10px;
  gap: 10px;
  color: var(--white);
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;

const Market = styled.div`
  position: relative;
  border: 1px solid var(--gray3);
  height: 200px;
  margin-top: 12px;
`;

export default TitleGraph;
