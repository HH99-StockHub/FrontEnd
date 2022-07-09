//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
import PopularText from "./PopularText";

const FramPopularCard = ({ data, index }) => {
  return (
    <WrapCard>
      <WrapText>
        <p>{data.articleTitle}</p>
        <PopularText upCount={data.voteUpCount} index={index} />
      </WrapText>
    </WrapCard>
  );
};

export default FramPopularCard;

const WrapCard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 92px;
  padding: 12px 14px 16px 16px;
  border: 1px solid var(--gray2);
  border-radius: 0 0 6px 6px;
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  > p {
    width: 100%;
    font-size: 14px;
    line-height: 19px;
    font-size: 14px;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
