//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//컴포넌트
import CardTextPopular from "../common/CardTextPopular";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Profile from "../common/Profile";
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
  const arr = [0, 1, 2, 3, 4, 5];
  // media
  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });
  if (isError) toastify.error("인기글 불러오기를 실패했습니다.");

  return (
    <ArticleBox>
      {isLoading && <LoadingSpinner />}
      {isSmall ? (
        <>
          {arr.slice(0, 4).map((v, l) => {
            return data[l] === undefined ? (
              <NoCard>
                전망글을 달성하고 <br /> 인기글에 도전하세요
              </NoCard>
            ) : (
              <WrapCard key={data[l].articleId}>
                <Link to={`/detail/article/${data[l].articleId}`}>
                  <CardTextPopular up={data[l].voteUpCount} />
                  <WrapText>{data[l].articleTitle}</WrapText>
                </Link>
                <Profile
                  nickname={data[l].nickname}
                  img={data[l].profileImage}
                  userId={data[l].userId}
                />
              </WrapCard>
            );
          })}
        </>
      ) : (
        <>
          {arr.map((v, l) => {
            return data[l] === undefined ? (
              <NoCard>
                전망글을 달성하고 <br /> 인기글에 도전하세요
              </NoCard>
            ) : (
              <WrapCard key={data[l].articleId}>
                <Link to={`/detail/article/${data[l].articleId}`}>
                  <CardTextPopular up={data[l].voteUpCount} />
                  <WrapText>{data[l].articleTitle}</WrapText>
                </Link>
                <Profile
                  nickname={data[l].nickname}
                  img={data[l].profileImage}
                  userId={data[l].userId}
                />
              </WrapCard>
            );
          })}
        </>
      )}
    </ArticleBox>
  );
};

export default PopularArticleList;

const ArticleBox = styled.div`
  position: relative;
  display: grid;
  grid-gap: 24px 15px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  height: 157px;
  padding: 16px;
  border: 1px solid var(--gray2);
  border-radius: 6px;
  > a {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const WrapText = styled.p`
  display: -webkit-box;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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
