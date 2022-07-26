//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import CardHeader from "./CardHeader";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";

const FramRichArticle = () => {
  // useQuery
  const {
    // data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetFameRichArticle();
  if (isError) toastify.error("Best 수익왕 불러오기를 실패했습니다.");
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
  ];
  return (
    <WrapRich>
      {isLoading && <LoadingSpinner />}
      {data.map((v, l) => {
        return (
          <WrapCard key={v.articleId}>
            <CardHeader
              nickname={v.nickname}
              title={v.stockName}
              userId={v.userId}
            />
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
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const WrapCard = styled.div`
  width: 100%;
`;
