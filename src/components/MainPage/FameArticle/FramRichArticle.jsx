//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";

const FramRichArticle = () => {
  // useQuery
  const { data = [] } = useMainPageQuery.useGetFameRichArticle();
  return (
    <div>
      <Title>수익왕 베스트</Title>
      <WrapCard>
        {data.map((v) => {
          return (
            <Link to={`/detail/article/${v.articleId}`}>
              <FramRichCard data={v} />
            </Link>
          );
        })}
      </WrapCard>
    </div>
  );
};

export default FramRichArticle;

const Title = styled.h3`
  margin-bottom: 9px;
  font-size: 12px;
  font-weight: 700;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 21px;
`;
