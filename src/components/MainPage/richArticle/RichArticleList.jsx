import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import CardTextRich from "../common/CardTextRich";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Profile from "../common/Profile";
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";
const RichArticleList = () => {
  // useQuery
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetRichArticles();
  const arr = [0, 1, 2, 3, 4, 5];
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
          {arr.slice(0, 4).map((v, l) => {
            return data[l] === undefined ? (
              <NoCard>
                게시글을 작성하고 <br /> 수익왕에 도전하세요
              </NoCard>
            ) : (
              <WrapCard key={data[l].articleId}>
                <Link to={`/detail/article/${data[l].articleId}`}>
                  <CardTextRich stock={data[l].stockReturn} />
                  <WrapText>{data[l].articleTitle}</WrapText>
                </Link>
                <Profile
                  img={data[l].profileImage}
                  nickname={data[l].nickname}
                  userId={data[l].userId}
                  rank={data[l].rankTitle}
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
                게시글을 작성하고 <br /> 수익왕에 도전하세요
              </NoCard>
            ) : (
              <WrapCard key={data[l].articleId}>
                <Link to={`/detail/article/${data[l].articleId}`}>
                  <CardTextRich stock={data[l].stockReturn} />
                  <WrapText>{data[l].articleTitle}</WrapText>
                </Link>
                <Profile
                  img={data[l].profileImage}
                  nickname={data[l].nickname}
                  userId={data[l].userId}
                  rank={data[l].rankTitle}
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
