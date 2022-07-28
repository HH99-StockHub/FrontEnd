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
      <WrapBtn state={chartState}>
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
            <AdjustmentBtn
              state={chartState}
              onClick={() => {
                if (chartCount * 2 <= data.chart.length) {
                  if (chartStandard + chartCount * 2 > data.chart.length) {
                    setChartStandard(data.chart.length - chartCount * 2);
                  }
                  setChartCount(chartCount * 2);
                  setChartMove(parseInt((chartCount * 2) / 3));
                } else {
                  setChartStandard(0);
                  setChartCount(data.chart.length);
                  setChartMove(parseInt(data.chart.length / 3));
                }
              }}
            >
              -
            </AdjustmentBtn>
            <button
              onClick={() => {
                setChartState(false);
              }}
            >
              일봉 차트
            </button>
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
          <button
            onClick={() => {
              setChartState(true);
            }}
          >
            선 차트
          </button>
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
  > div {
    display: flex;
    justify-content: center;
    gap: 10%;
    > div {
      display: flex;
      gap: 5px;
      > button {
        padding: 10px 20px;
        border-radius: 6px;
        &:nth-child(3) {
          ${({ state }) => {
            return !state
              ? "background-color: var(--green1);color: var(--white); "
              : null;
          }}
          border: 1px solid var(--green1);
        }
      }
    }
    > button {
      padding: 10px 20px;
      border-radius: 6px;
      border: 1px solid #000;
      &:nth-child(2) {
        ${({ state }) => {
          return state
            ? "background-color: var(--green1);color: var(--white); "
            : null;
        }}
      }
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

const AdjustmentBtn = styled.button`
  border: 1px solid var(--gray3);
  border-radius: 6px;
  ${({ state }) => (state ? "display:none;" : null)}
`;
