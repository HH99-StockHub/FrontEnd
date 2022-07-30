import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// 컴포넌트
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";
// 모듈
import { showChart } from "../../state/client/modal";
import { useChartQuery } from "./useChartQuery";

const DetailChart = ({ stockName }) => {
  //media
  const isMiddle = useMediaQuery({
    query: "(max-width : 720px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width : 530px)",
  });
  // 차트 선택
  const [chartState, setChartState] = useState(false);
  // 캔들 차트 상태관리
  const [chartCount, setChartCount] = useState(isMiddle ? 25 : 50);
  const [chartMove, setChartMove] = useState(parseInt(chartCount / 3));
  const [chartStandard, setChartStandard] = useState(0);
  // 차트 닫기
  const modalState = useSetRecoilState(showChart);
  // 차트 호출
  const { data, isLoading } = useChartQuery.useGetChartData(stockName);

  return (
    <WrapChart>
      <WrapBtn>
        <div>
          <div>
            <AdjustmentBtn
              state={chartState}
              onClick={() => {
                if (
                  chartStandard + chartMove <
                  data.chart.length - chartCount
                ) {
                  setChartStandard(chartStandard + chartMove);
                } else {
                  setChartStandard(data.chart.length - chartCount);
                }
              }}
            >
              &#8592;
            </AdjustmentBtn>
            <AdjustmentBtn state={chartState} onClick={() => {}}>
              -
            </AdjustmentBtn>
            <DayChart
              state={chartState}
              onClick={() => {
                setChartState(false);
              }}
            >
              {isSmall ? "일봉" : "일봉 차트"}
            </DayChart>
            <AdjustmentBtn
              state={chartState}
              onClick={() => {
                if (chartCount > 10) {
                  setChartCount(parseInt(chartCount / 2));
                  setChartMove(parseInt(chartCount / 2 / 3));
                } else {
                  setChartCount(5);
                  setChartMove(parseInt(2));
                }
              }}
            >
              +
            </AdjustmentBtn>
            <AdjustmentBtn
              state={chartState}
              onClick={() => {
                if (chartStandard - chartMove > 0) {
                  setChartStandard(chartStandard - chartMove);
                } else {
                  setChartStandard(0);
                }
              }}
            >
              &#8594;
            </AdjustmentBtn>
          </div>
          <YearChart
            state={chartState}
            onClick={() => {
              setChartState(true);
            }}
          >
            {isSmall ? "1년" : "선 차트"}
          </YearChart>
        </div>
        <button
          onClick={() => {
            modalState(false);
          }}
        >
          X
        </button>
      </WrapBtn>
      {data !== undefined && !isLoading ? (
        chartState ? (
          <LineChart stockName={stockName} data={data} isLoading={isLoading} />
        ) : (
          <CandleChart
            stockName={stockName}
            chartCount={chartCount}
            chartMove={chartMove}
            chartStandard={chartStandard}
            data={data}
            isLoading={isLoading}
          />
        )
      ) : null}
    </WrapChart>
  );
};

export default DetailChart;

const WrapChart = styled.div`
  width: 100%;
  height: 90%;
`;

const WrapBtn = styled.div`
  position: relative;
  background-color: var(--green1);
  > div {
    display: flex;
    justify-content: space-around;
    gap: 10%;
    width: 85%;
    @media screen and (max-width: 600px) {
      gap: 8px;
    }
    > div {
      display: flex;
      gap: 5px;
    }
  }
  > button {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
  }
`;
const DayChart = styled.button`
  ${({ state }) => {
    return !state
      ? "background-color: var(--green1);color: var(--white); "
      : null;
  }}
  padding: 10px 20px;
  width: 100px;
  border-radius: 6px;
  border: 1px solid var(--green1);
  @media screen and (max-width: 530px) {
    padding: 5px 10px;
    width: 50px;
  }
`;
const YearChart = styled.button`
  ${({ state }) => {
    return state
      ? "background-color: var(--green1);color: var(--white); "
      : null;
  }}
  padding: 10px 20px;
  width: 100px;
  border-radius: 6px;
  border: 1px solid var(--green1);
  @media screen and (max-width: 530px) {
    padding: 5px 10px;
    width: 50px;
  }
`;
const AdjustmentBtn = styled.button`
  border: 1px solid var(--gray3);
  border-radius: 6px;
  padding: 0 10px;
  ${({ state }) => (state ? "display:none;" : null)}
  @media screen and (max-width: 430px) {
    padding: 0 4px;
  }
  @media screen and (max-width: 360px) {
    padding: 0 2px;
  }
`;
