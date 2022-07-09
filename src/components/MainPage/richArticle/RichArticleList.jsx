//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardTextRich from "../common/CardTextRich";
// query 훅
import { useMainPageQuery } from "../useMainPageQuery";
const RichArticleList = () => {
  // useQuery
  const { data = [] } = useMainPageQuery.useGetRichArticles();
  return (
    <div>
      <ArticleBox>
        {data.map((v) => {
          return (
            <Link to={`/detail/article/${v.id}`}>
              <WrapCard>
                <WrapImgText>
                  <CardTextRich company={v.stockName} stock={v.voteUpCount} />
                </WrapImgText>
                <WrapText>
                  글 제목이 있으면 유저들이 미리 내용을 파악할 수 있어요
                </WrapText>
              </WrapCard>
            </Link>
          );
        })}
      </ArticleBox>
    </div>
  );
};

export default RichArticleList;

const ArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px 0;
  flex-wrap: wrap;
  width: 588px;
`;
const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 179px;
  height: 112px;
  padding: 18px 14px;
  border: 1px solid #000;
`;
const WrapImgText = styled.div`
  display: flex;
  gap: 9px;
`;

const WrapText = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  display: -webkit-box;
  width: 100%;
  height: 32px;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
