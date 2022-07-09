//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";
import CardHeader from "./CardHeader";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";

const FramRichArticle = () => {
  // useQuery
  const { data = [] } = useMainPageQuery.useGetFameRichArticle();
  return (
    <WrapRich>
      {data.map((v, l) => {
        return (
          <WrapCard>
            <CardHeader nickname={v.nickname} title={v.stockName} />
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
  display: flex;
  gap: 12px;
`;

const WrapCard = styled.div`
  width: 188px;
`;
