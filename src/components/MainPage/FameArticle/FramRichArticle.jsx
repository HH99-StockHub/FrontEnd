//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import FramRichCard from "./FramRichCard";
import CardHeader from "./CardHeader";
// 쿼리 훅
import { useMainPageQuery } from "../useMainPageQuery";

const FramRichArticle = () => {
  // useQuery
  // const { data = [] } = useMainPageQuery.useGetFameRichArticle();
  //임시 arr
  const data = [
    {
      articleId: "Long",
      createdAt: "LocalDateTime",
      userId: "Long",
      nickname: "박태형",
      profileImage: "String",
      articleTitle: "삼성전자 앞으로앞으로앞으로앞으로 앞으로 1년만 보면",
      stockName: "삼성전자",
      stockReturn: "double",
      voteUpCount: "int",
      voteDownCount: "int",
      commentCount: "int",
      viewCount: "int",
    },
    {
      articleId: "Long",
      createdAt: "LocalDateTime",
      userId: "Long",
      nickname: "박태형",
      profileImage: "String",
      articleTitle: "삼성전자 앞으로 1년만 보면",
      stockName: "삼성전자",
      stockReturn: "double",
      voteUpCount: "int",
      voteDownCount: "int",
      commentCount: "int",
      viewCount: "int",
    },
    {
      articleId: "Long",
      createdAt: "LocalDateTime",
      userId: "Long",
      nickname: "박태형",
      profileImage: "String",
      articleTitle: "String",
      stockName: "삼성전자",
      stockReturn: "double",
      voteUpCount: "int",
      voteDownCount: "int",
      commentCount: "int",
      viewCount: "int",
    },
  ];
  return (
    <WrapRich>
      {data.map((v, l) => {
        return (
          <WrapCard>
            <CardHeader nickname={v.nickname} title={v.stockName} />
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
  display: flex;
  gap: 12px;
`;

const WrapCard = styled.div`
  width: 188px;
`;
