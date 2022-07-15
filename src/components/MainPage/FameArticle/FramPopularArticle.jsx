//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramPopularCard from "./FramPopularCard";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";
import CardHeader from "./CardHeader";
import LoadingSpinner from "../../../repeat/LoadingSpinner";

const FramPopularArticle = () => {
  // useQuery

  const { data = [], isLoading } = useMainPageQuery.useGetFamePopularArticle();
  return (
    <WrapPopular>
      {isLoading && <LoadingSpinner />}
      {data.map((v, l) => {
        return (
          <WrapCard key={v.articleId}>
            <CardHeader
              nickname={v.nickname}
              title={v.stockName}
              userId={v.userId}
            />
            <Link to={`/detail/article/${v.articleId}`}>
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
  position: relative;
  display: flex;
  gap: 12px;
  min-height: 168px;
`;

const WrapCard = styled.div`
  width: 188px;
  display: flex;
  flex-direction: column;
`;
