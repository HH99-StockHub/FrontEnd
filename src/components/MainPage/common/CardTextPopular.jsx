import React from "react";
import styled from "styled-components";
import { ReactComponent as UpSvg } from "../../../image/Up.svg";
const CardTextPopular = ({ up }) => {
  return (
    <Wrap>
      <UpSvg width="12.83" height="11.67" fill="var(--green1)" />
      <Text>{up}</Text>
    </Wrap>
  );
};

export default CardTextPopular;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 17px;
`;
const Text = styled.span`
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: var(--green1);
`;
