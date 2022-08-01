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
  const arr = [0, 1, 2];
  return (
    <WrapPopular>
      {isLoading && <LoadingSpinner />}
      {arr.map((v, l) => {
        return data[l] === undefined ? (
          <NoCard>
            전망글을 달성하고 <br /> 인기글에 도전하세요
          </NoCard>
        ) : (
          <WrapCard key={data[l].articleId}>
            <CardHeader
              nickname={data[l].nickname}
              title={data[l].stockName}
              userId={data[l].userId}
            />
            <Link to={`/detail/article/${data[l].articleId}`}>
              <FramPopularCard data={data[l]} index={l} />
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WrapCard = styled.div`
  width: 100%;
`;

const NoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 28px;
  color: var(--gray3);
  font-size: 16px;
  font-weight: 700;
  background-color: var(--gray1);
  border: 1px solid var(--gray2);
  border-radius: 6px;
  min-height: 150px;
`;
