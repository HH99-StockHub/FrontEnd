import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
// 컴포넌트
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";
// 모듈
import { showChart } from "../../state/client/modal";

const DetailChart = ({ stockName }) => {
  // 차트 선택
  const [chartState, setChartState] = useState(false);
  // 차트 닫기
  const modalState = useSetRecoilState(showChart);

  return (
    <WrapChart>
      <WrapBtn state={chartState}>
        <div>
          <button
            onClick={() => {
              setChartState(false);
            }}
          >
            주봉
          </button>
          <button
            onClick={() => {
              setChartState(true);
            }}
          >
            1년
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
      {chartState ? (
        <LineChart stockName={stockName} />
      ) : (
        <CandleChart stockName={stockName} />
      )}
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
    > button {
      border: 1px solid #000;
      padding: 10px 20px;
      border-radius: 6px;
      &:nth-child(${({ state }) => (state ? 2 : 1)}) {
        background-color: var(--green1);
        color: var(--white);
        border: 1px solid var(--green1);
      }
    }
  }
  > button {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #000;
  }
`;
