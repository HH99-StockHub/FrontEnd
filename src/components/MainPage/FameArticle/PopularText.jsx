//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 이미지
import { ReactComponent as UpSvg } from "../../../image/Up.svg";
import { ReactComponent as Medal1 } from "../../../image/GoldMedal.svg";
import { ReactComponent as Medal2 } from "../../../image/SilverMedal.svg";
import { ReactComponent as Medal3 } from "../../../image/BronzMedal.svg";
const PopularText = React.memo(({ upCount, index }) => {
  // 순서에 따라 매달 색 변경
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
        <UpSvg width="12.83" height="11.67" fill="var(--green1)" />
        <p>{upCount}</p>
      </div>
      {medal}
    </WrapText>
  );
});

export default PopularText;

const WrapText = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 6px;
    align-items: center;
    > p {
      color: var(--green1);
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
