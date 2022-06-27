//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
const ArticleTextCard = ({ title, userId }) => {
  return (
    <WrapText>
      <h3>{title}</h3>
      <p>{userId}</p>
    </WrapText>
  );
};

export default ArticleTextCard;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  h3 {
    font-size: 12px;
    font-weight: 700;
  }
  p {
    font-size: 9px;
    font-weight: 300;
  }
`;
