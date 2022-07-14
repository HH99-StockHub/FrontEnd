//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardTextRich from "../common/CardTextRich";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Porfile from "../common/Porfile";
// query 훅
import { useMainPageQuery } from "../useMainPageQuery";
const RichArticleList = () => {
  // useQuery
  const { data = [], isLoading } = useMainPageQuery.useGetRichArticles();

  return (
    <div>
      <ArticleBox>
        {isLoading && <LoadingSpinner />}
        {data.map((v) => {
          return (
            <WrapCard>
              <Link to={`/detail/article/${v.id}`}>
                <CardTextRich stock={v.voteUpCount} />
                <WrapText>{v.articleTitle}</WrapText>
              </Link>
              <Porfile
                img={v.profileImage}
                nickname={v.nickname}
                userId={v.userId}
              />
            </WrapCard>
          );
        })}
      </ArticleBox>
    </div>
  );
};

export default RichArticleList;

const ArticleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 24px 15px;
  flex-wrap: wrap;
  width: 588px;
  min-height: 300px;
`;
const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 186px;
  height: 157px;
  padding: 16px;
  border: 1px solid var(--gray2);
`;

const WrapText = styled.p`
  display: -webkit-box;
  margin-top: 12px;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
