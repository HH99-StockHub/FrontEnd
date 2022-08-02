import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";
import { showChart } from "../../state/client/modal";
import { useChartQuery } from "./useChartQuery";
import { toastify } from "../../custom/toastify";
import { ReactComponent as MinusSvg } from "../../image/Reduction.svg";
import { ReactComponent as LeftSvg } from "../../image/LeftChart.svg";
import { ReactComponent as RightSvg } from "../../image/RightChart.svg";
import { ReactComponent as PlusSvg } from "../../image/Enlargement.svg";

const DetailChart = ({ stockName }) => {
  //media
  const isMiddle = useMediaQuery({
    query: "(max-width : 720px)",
  });
  const isSmall = useMediaQuery({
    query: "(max-width : 580px)",
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
  // 확대
  const plus = () => {
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
      toastify.info("최대 입니다");
    }
  };
  // 축소
  const minus = () => {
    if (chartCount > 10) {
      setChartCount(parseInt(chartCount / 2));
      setChartMove(parseInt(chartCount / 2 / 3));
    } else {
      setChartCount(5);
      setChartMove(parseInt(2));
      toastify.info("최대 입니다");
    }
  };
  // 왼쪽이동
  const moveLeft = () => {
    if (chartStandard + chartMove < data.chart.length - chartCount) {
      setChartStandard(chartStandard + chartMove);
    } else {
      setChartStandard(data.chart.length - chartCount);
      toastify.info("최대 입니다");
    }
  };
  // 오른쪽 이동
  const moveRight = () => {
    if (chartStandard - chartMove > 0) {
      setChartStandard(chartStandard - chartMove);
    } else {
      setChartStandard(0);
      toastify.info("최대 입니다");
    }
  };

  return (
    <WrapChart>
      <WrapBtn>
        <WrapControlBox>
          {chartState ? null : (
            <>
              <div>
                <button onClick={minus}>
                  {isSmall ? (
                    <PlusSvg width="20" heigth="20" />
                  ) : (
                    <PlusSvg width="31" heigth="31" />
                  )}
                </button>
                <button onClick={plus}>
                  {isSmall ? (
                    <MinusSvg width="27" heigth="27" />
                  ) : (
                    <MinusSvg width="41" heigth="41" />
                  )}
                </button>
              </div>
              <div>
                <button onClick={moveLeft}>
                  {isSmall ? (
                    <LeftSvg width="24" heigth="24" />
                  ) : (
                    <LeftSvg width="36" heigth="36" />
                  )}
                </button>
                <button onClick={moveRight}>
                  {isSmall ? (
                    <RightSvg width="24" heigth="24" />
                  ) : (
                    <RightSvg width="36" heigth="36" />
                  )}
                </button>
              </div>
            </>
          )}
        </WrapControlBox>
        <WrapChartBtn state={chartState}>
          <button
            onClick={() => {
              setChartState(false);
            }}
          >
            일봉 차트
          </button>
          <button
            onClick={() => {
              setChartState(true);
            }}
          >
            1년 차트
          </button>
        </WrapChartBtn>
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
  height: 80%;
  @media screen and (max-width: 740px) {
    height: 70%;
  }
  @media screen and (max-width: 580px) {
    height: 70%;
  }
`;

const WrapBtn = styled.div`
  position: relative;
  height: 77px;
  display: flex;
  justify-content: space-between;
  background-color: var(--green1);
  padding: 0 8%;
  @media screen and (max-width: 740px) {
    flex-direction: column;
    padding-top: 15px;
    height: 125px;
  }
  @media screen and (max-width: 580px) {
    padding-top: 8px;
    height: 90px;
  }
`;

const WrapControlBox = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  @media screen and (max-width: 740px) {
    justify-content: left;
  }
  > div {
    display: flex;
    gap: 10px;
  }
`;
const WrapChartBtn = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 7px;
  @media screen and (max-width: 740px) {
    justify-content: right;
  }
  > button {
    width: 138px;
    height: 50px;
    color: var(--green1);
    background-color: var(--green2);
    border-radius: 10px 10px 0 0;
    font-size: 18px;
    font-weight: 600;
    &:nth-child(${({ state }) => (state ? 2 : 1)}) {
      background-color: var(--white);
      color: var(--black);
    }
    @media screen and (max-width: 580px) {
      font-size: 14px;
      height: 40px;
    }
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
