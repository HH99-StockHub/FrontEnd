//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 커스텀 훅
import usePriceYield from "../../../custom/priceYield";
import useSliceNum from "../../../custom/sliceNum";
//이미지
import { ReactComponent as UpStockSvg } from "../../../image/UpStock.svg";
const RichText = ({ lastStock, nowStock }) => {
  return (
    <WrapText>
      <UpStockSvg />
      <p>{useSliceNum(usePriceYield(lastStock, nowStock))}%</p>
    </WrapText>
  );
};

export default RichText;

const WrapText = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  p {
    font-size: 9px;
    font-weight: 700;
  }
`;
