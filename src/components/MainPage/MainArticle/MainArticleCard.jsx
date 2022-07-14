//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainArticleCard = ({
  date,
  title,
  user,
  watch,
  up,
  down,
  articleId,
  userId,
}) => {
  return (
    <WrapCard>
      <p style={{ width: "244px" }}>
        <Link to={`/detail/article/${articleId}`}>{title}</Link>
      </p>
      <p style={{ width: "56px" }}>{up}</p>
      <p style={{ width: "56px" }}>{down}</p>
      <p style={{ width: "64px" }}>{watch}</p>
      <p style={{ width: "64px" }}>{date}</p>
      <p style={{ width: "64px" }}>
        <Link to={`/search/article/${user}/${userId}`}>{user}</Link>
      </p>
    </WrapCard>
  );
};

export default MainArticleCard;

const WrapCard = styled.div`
  display: flex;
  padding: 12px 20px;
  font-size: 12px;
  p {
    font-weight: 400;
  }
  p:nth-child(1) {
    font-size: 14px;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:nth-child(2) {
    color: var(--green1);
    font-size: 14px;
    font-weight: 700;
  }
  p:nth-child(3) {
    font-size: 14px;
    font-weight: 700;
  }
  p:nth-child(5) {
    color: var(--gray3);
  }
`;
