import React from "react";
import styled from "styled-components";
import CandleChart from "./CandleChart";
import LineChart from "./LineChart";

const DetailChart = () => {
  return (
    <WrapChart>
      {/* <LineChart /> */}
      <CandleChart />
    </WrapChart>
  );
};

export default DetailChart;

const WrapChart = styled.div`
  width: 100%;
  height: 100%;
`;
