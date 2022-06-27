//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//컴포넌트
import FramPopularCard from "./FramPopularCard";

const FramPopularArticle = () => {
  //테스트 arr
  const data = [1, 2, 3];
  return (
    <div>
      <Title>인기 게시물</Title>
      <WrapCard>
        {data.map((v) => {
          return <FramPopularCard />;
        })}
      </WrapCard>
    </div>
  );
};

export default FramPopularArticle;

const Title = styled.h3`
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 700;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 21px;
`;
