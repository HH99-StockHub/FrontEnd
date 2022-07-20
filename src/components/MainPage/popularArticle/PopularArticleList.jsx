//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardTextPopular from "../common/CardTextPopular";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Porfile from "../common/Porfile";
// 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";

const PopularArticleList = () => {
  // 인기 게시글 데이터 받기
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetPopularArticles();
  if (isError) toastify.error("인기글 불러오기를 실패했습니다.");
  return (
    <ArticleBox>
      {isLoading && <LoadingSpinner />}
      {data.map((v) => {
        return (
          <WrapCard key={v.articleId}>
            <Link to={`/detail/article/${v.articleId}`}>
              <WrapImgText>
                <CardTextPopular up={v.voteUpCount} />
              </WrapImgText>
              <WrapText>{v.articleTitle}</WrapText>
            </Link>
            <Porfile
              nickname={v.nickname}
              img={v.profileImage}
              userId={v.userId}
            />
          </WrapCard>
        );
      })}
    </ArticleBox>
  );
};

export default PopularArticleList;

const ArticleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  gap: 24px 15px;
  flex-wrap: wrap;
  width: 588px;
  min-height: 300px;
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
  border-radius: 6px;
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
