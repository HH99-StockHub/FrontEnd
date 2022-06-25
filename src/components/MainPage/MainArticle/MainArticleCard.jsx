//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";

const MainArticleCard = () => {
  return (
    <WrapCard>
      <p>time</p>
      <p>title</p>
      <div>
        <p>조회수</p>
        <p>추천</p>
        <p>비추천</p>
      </div>
    </WrapCard>
  );
};

export default MainArticleCard;

const WrapCard = styled.div`
  display: flex;
  gap: 20px;
  > div {
    display: flex;
    gap: 10px;
  }
`;
