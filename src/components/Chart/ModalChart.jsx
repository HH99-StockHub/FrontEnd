import React from "react";
import styled from "styled-components";
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";

const ModalChart = () => {
  return (
    <WrapChart>
      {/* <LineChart /> */}
      <CandleChart />
    </WrapChart>
  );
};

export default ModalChart;

const WrapChart = styled.div`
  width: 100%;
  height: 100%;
`;
