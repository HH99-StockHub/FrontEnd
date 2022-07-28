//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramPopularCard from "./FramPopularCard";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import CardHeader from "./CardHeader";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";

const FramPopularArticle = () => {
  // useQuery

  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetFamePopularArticle();
  if (isError) toastify.error("Best 인기글 불러오기를 실패했습니다.");

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
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const WrapCard = styled.div`
  width: 100%;
`;
