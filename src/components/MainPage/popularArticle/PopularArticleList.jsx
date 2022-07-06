//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardImg from "../common/CardImg";
import CardTextPopular from "../common/CardTextPopular";
// 훅
import { useMainPageQuery } from "../useMainPageQuery";

const PopularArticleList = () => {
  // 인기 게시글 데이터 받기
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useMainPageQuery.useGetPopularArticles();

  return (
    <ArticleBox>
      {data.map((v) => {
        return (
          <Link to={`/detail/article/${v.id}`} key={v.articleId}>
            <WrapCard>
              <WrapImgText>
                <CardImg imgUrl={v.profileImage} />
                <CardTextPopular company={v.stockName} up={v.voteUpCount} />
              </WrapImgText>
              <WrapText>{v.articleTitle}</WrapText>
            </WrapCard>
          </Link>
        );
      })}
    </ArticleBox>
  );
};

export default PopularArticleList;

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
