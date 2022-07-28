//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//컴포넌트
import CardTextRich from "../common/CardTextRich";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Profile from "../common/Profile";
// query 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";
const RichArticleList = () => {
  // useQuery
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetRichArticles();

  // media
  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });
  if (isError) toastify.error("수익왕 게시글 불러오기를 실패했습니다.");

  return (
    <ArticleBox>
      {isLoading && <LoadingSpinner />}
      {isSmall ? (
        <>
          {data.slice(0, 4).map((v) => {
            return (
              <WrapCard key={v.articleId}>
                <Link to={`/detail/article/${v.articleId}`}>
                  <CardTextRich stock={v.stockReturn} />
                  <WrapText>{v.articleTitle}</WrapText>
                </Link>
                <Profile
                  img={v.profileImage}
                  nickname={v.nickname}
                  userId={v.userId}
                  rank={v.rank}
                />
              </WrapCard>
            );
          })}
        </>
      ) : (
        <>
          {data.map((v) => {
            return (
              <WrapCard key={v.articleId}>
                <Link to={`/detail/article/${v.articleId}`}>
                  <CardTextRich stock={v.stockReturn} />
                  <WrapText>{v.articleTitle}</WrapText>
                </Link>
                <Profile
                  img={v.profileImage}
                  nickname={v.nickname}
                  userId={v.userId}
                  rank={v.rank}
                />
              </WrapCard>
            );
          })}
        </>
      )}
    </ArticleBox>
  );
};

export default RichArticleList;

const ArticleBox = styled.div`
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
`;

const WrapText = styled.p`
  display: -webkit-box;
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
