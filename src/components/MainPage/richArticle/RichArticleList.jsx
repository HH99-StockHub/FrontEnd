//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//컴포넌트
import CardTextRich from "../common/CardTextRich";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import Porfile from "../common/Porfile";
// query 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";
const RichArticleList = () => {
  // useQuery
  const {
    // data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetRichArticles();

  // media
  const isSmall = useMediaQuery({
    query: "(max-width: 700px)",
  });
  if (isError) toastify.error("수익왕 게시글 불러오기를 실패했습니다.");
  const data = [
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
    {
      articleId: 9,
      articleTitle:
        "가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사",
      commentCount: 0,
      createdAt: "2022-07-25T02:29:11.753",
      nickname: "박태형",
      profileImage:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      stockName: "서연이화",
      stockReturn: 0,
      userId: 3,
      viewCount: 0,
      voteDownCount: 0,
      voteUpCount: 0,
    },
  ];
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
                <Porfile
                  img={v.profileImage}
                  nickname={v.nickname}
                  userId={v.userId}
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
                <Porfile
                  img={v.profileImage}
                  nickname={v.nickname}
                  userId={v.userId}
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
