//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import usePriceYield from "../../../custom/priceYield";
import useSliceNum from "../../../custom/sliceNum";

const RichText = ({ lastStock, nowStock }) => {
  return (
    <WrapText>{useSliceNum(usePriceYield(lastStock, nowStock))} %</WrapText>
  );
};

export default RichText;
const WrapText = styled.div`
  display: flex;
  gap: 10px;
`;
