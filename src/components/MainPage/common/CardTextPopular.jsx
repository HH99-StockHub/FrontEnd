import React from "react";
import styled from "styled-components";
// 이미지
import { ReactComponent as UpSvg } from "../../../image/Up.svg";
const CardTextPopular = ({ company, up }) => {
  return (
    <Wrap>
      <p>{company}</p>
      <div>
        <UpSvg width="11" height="10" />
        <Text>{up}</Text>
      </div>
    </Wrap>
  );
};

export default CardTextPopular;

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
    gap: 2.5px;
  }
`;
const Text = styled.span`
  font-size: 9px;
  font-weight: 700;
`;
