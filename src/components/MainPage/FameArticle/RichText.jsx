import React from "react";
import styled from "styled-components";
import { ReactComponent as UpStockSvg } from "../../../image/UpStock.svg";
import { ReactComponent as Medal1 } from "../../../image/GoldMedal.svg";
import { ReactComponent as Medal2 } from "../../../image/SilverMedal.svg";
import { ReactComponent as Medal3 } from "../../../image/BronzMedal.svg";

const RichText = React.memo(({ stockReturn, index }) => {
  let medal;
  switch (index) {
    case 0:
      medal = <Medal1 />;
      break;
    case 1:
      medal = <Medal2 />;
      break;
    case 2:
      medal = <Medal3 />;
      break;
    default:
      break;
  }
  return (
    <WrapText>
      <div>
        <UpStockSvg width="11.42" height="6.76" fill="var(--green1)" />
        <p>{stockReturn}%</p>
      </div>
      {medal}
    </WrapText>
  );
});

export default RichText;

const WrapText = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 6px;
    align-items: center;
    p {
      font-size: 14px;
      font-weight: 700;
      color: var(--green1);
    }
  }
`;
