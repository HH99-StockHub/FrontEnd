//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
import RichText from "./RichText";

const FramRichCard = ({ data }) => {
  return (
    <div>
      <WrapCard>
        <WrapText>
          <RichText />
        </WrapText>
      </WrapCard>
    </div>
  );
};

export default FramRichCard;

const WrapCard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 166px;
  height: 92px;
  padding: 10px 12px;
  border: 1px solid #000;
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0;
`;
