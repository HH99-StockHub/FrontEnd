//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";

const FramRichArticle = () => {
  //테스트 arr
  const data = [1, 2, 3];
  return (
    <div>
      <Title>수익률 TOP</Title>
      <WrapCard>
        {data.map((v) => {
          return <FramRichCard />;
        })}
      </WrapCard>
    </div>
  );
};

export default FramRichArticle;

const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 700;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 21px;
`;
