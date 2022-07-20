//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

import useChangeNum from "../../../custom/changeNum";
const MainArticleCard = ({ data }) => {
  const [today, setToday] = useState(dayjs(data.createdAt).format("MM.DD"));
  const changeNum = useChangeNum;
  useEffect(() => {
    if (
      dayjs(new Date()).format().slice(0, 7) ===
      dayjs(data.createdAt).format().slice(0, 7)
    ) {
      if (
        dayjs(new Date()).format("D") - dayjs(data.createdAt).format("D") ===
        1
      ) {
        setToday("어제");
      } else if (
        dayjs(new Date()).format("D") === dayjs(data.createdAt).format("D")
      ) {
        setToday("오늘");
      }
    }
  }, [data.createdAt]);
  return (
    <WrapCard>
      <p style={{ width: "80px" }}>{data.stockName}</p>
      <div style={{ width: "252px" }}>
        <p>
          <Link to={`/detail/article/${data.articleId}`}>
            {data.articleTitle}
          </Link>
        </p>
        <span>[{data.commentCount}]</span>
      </div>
      <p style={{ width: "56px" }}>
        <Link to={`/search/article/${data.nickname}/${data.userId}/1`}>
          {data.nickname}
        </Link>
      </p>
      <p style={{ width: "56px" }}>{today}</p>
      <p style={{ width: "56px" }}>{changeNum(data.viewCount)}</p>
      <p style={{ width: "56px" }}>{changeNum(data.voteUpCount)}</p>
    </WrapCard>
  );
};

export default MainArticleCard;

const WrapCard = styled.div`
  display: flex;
  padding: 12px 20px;
  font-size: 12px;
  > div {
    display: flex;
    gap: 4px;
    > span {
      color: var(--gray3);
    }
  }
  p {
    text-align: left;
    font-weight: 400;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:nth-child(6) {
    text-align: right;
    color: var(--green1);
    font-weight: 700;
  }
  p:nth-child(3) {
    text-align: right;
    font-weight: 700;
  }
  p:nth-child(4) {
    text-align: right;
    color: var(--gray3);
  }
  p:nth-child(5) {
    text-align: right;
  }
  p:nth-child(6) {
    text-align: right;
    color: var(--green1);
    font-weight: 700;
  }
`;
