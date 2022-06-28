//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 이미지
import { ReactComponent as UpSvg } from "../../../image/Up.svg";

const PopularText = React.memo(({ upCount }) => {
  return (
    <WrapText>
      <UpSvg width="11" height="10" />
      <p>{upCount}</p>
    </WrapText>
  );
});

export default PopularText;

const WrapText = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  p {
    font-size: 9px;
    font-weight: 700;
  }
`;
