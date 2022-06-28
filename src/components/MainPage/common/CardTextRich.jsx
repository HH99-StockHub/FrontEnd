import React from "react";
import styled from "styled-components";
// 이미지
import { ReactComponent as UpStockSvg } from "../../../image/UpStock.svg";
const CardTextRich = ({ company, stock }) => {
  return (
    <Wrap>
      <p>{company}</p>
      <div>
        <UpStockSvg width="9.79" height="5.8" />
        <Text>{stock}</Text>
      </div>
    </Wrap>
  );
};

export default CardTextRich;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5px;

  > p {
    font-size: 12px;
    font-weight: 700;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 2.5px;
  }
`;
const Text = styled.span`
  font-size: 9px;
  font-weight: 700;
`;
