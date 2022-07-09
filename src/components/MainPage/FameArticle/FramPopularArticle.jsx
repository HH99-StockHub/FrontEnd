//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramPopularCard from "./FramPopularCard";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";
import CardHeader from "./CardHeader";

const FramPopularArticle = () => {
  // useQuery

  const { data = [] } = useMainPageQuery.useGetFamePopularArticle();
  return (
    <WrapPopular>
      {data.map((v, l) => {
        return (
          <WrapCard key={l}>
            <CardHeader nickname={v.nickname} title={v.stockName} />
            <Link to={`/detail/article/${v.id}`} key={v.id}>
              <FramPopularCard data={v} index={l} />
            </Link>
          </WrapCard>
        );
      })}
    </WrapPopular>
  );
};

export default FramPopularArticle;
const WrapPopular = styled.div`
  display: flex;
  gap: 12px;
`;

const WrapCard = styled.div`
  width: 188px;
  display: flex;
  flex-direction: column;
`;
