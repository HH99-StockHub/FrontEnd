//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardTextPopular from "../common/CardTextPopular";
import Porfile from "../common/Porfile";
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
          <div>
            <WrapCard>
              <Link to={`/detail/article/${v.id}`} key={v.articleId}>
                <WrapImgText>
                  <CardTextPopular up={v.voteUpCount} />
                </WrapImgText>
                <WrapText>{v.articleTitle}</WrapText>
              </Link>
              <Link to="/">
                <Porfile nickname={v.nickname} img={v.profileImage} />
              </Link>
            </WrapCard>
          </div>
        );
      })}
    </ArticleBox>
  );
};

export default PopularArticleList;

const ArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px 15px;
  flex-wrap: wrap;
  width: 588px;
`;

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  width: 186px;
  height: 157px;
  padding: 16px;
  border: 1px solid var(--gray2);
`;
const WrapImgText = styled.div`
  display: flex;
  gap: 9px;
`;

const WrapText = styled.p`
  display: -webkit-box;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 300;
  line-height: 26px;
  font-weight: 700;
  width: 100%;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
