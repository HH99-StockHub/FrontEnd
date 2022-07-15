import React from "react";
import styled from "styled-components";
// 훅
import useSliceNum from "../../../custom/sliceNum";
// 이미지
import { ReactComponent as UpStockSvg } from "../../../image/UpStock.svg";
const CardTextRich = ({ stock }) => {
  const sliceNum = useSliceNum;
  return (
    <Wrap>
      <UpStockSvg width="11.42" height="6.76" fill="var(--green1)" />
      <p>{sliceNum(stock)} %</p>
    </Wrap>
  );
};

export default CardTextRich;

const Wrap = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  > p {
    font-size: 14px;
    font-weight: 700;
    color: var(--green1);
  }
`;
