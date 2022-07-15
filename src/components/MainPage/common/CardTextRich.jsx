import React from "react";
import styled from "styled-components";
// 이미지
import { ReactComponent as UpStockSvg } from "../../../image/UpStock.svg";
const CardTextRich = ({ stock }) => {
  return (
    <Wrap>
      <UpStockSvg width="11.42" height="6.76" fill="var(--green1)" />
      <p>{stock} %</p>
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
