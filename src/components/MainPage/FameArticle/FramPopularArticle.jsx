//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramPopularCard from "./FramPopularCard";
// 쿼리 훅
import { useGetFamePopularArticle } from "../../../custom/reactQuery/useQuery";

const FramPopularArticle = () => {
  //테스트 arr
  const data = [1, 2, 3];
  // useQuery
  // const {data = []} = useGetFamePopularArticle()
  return (
    <div>
      <Title>인기 베스트</Title>
      <WrapCard>
        {data.map((v) => {
          return (
            <Link to={`/detail/article/${data.id}`}>
              <FramPopularCard />
            </Link>
          );
        })}
      </WrapCard>
    </div>
  );
};

export default FramPopularArticle;

const Title = styled.h3`
  margin-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 21px;
`;
