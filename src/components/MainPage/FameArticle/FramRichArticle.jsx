//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import CardHeader from "./CardHeader";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";

const FramRichArticle = () => {
  // useQuery
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetFameRichArticle();
  if (isError) toastify.error("Best 수익왕 불러오기를 실패했습니다.");

  return (
    <WrapRich>
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
              <FramRichCard data={v} index={l} />
            </Link>
          </WrapCard>
        );
      })}
    </WrapRich>
  );
};

export default FramRichArticle;
const WrapRich = styled.div`
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
