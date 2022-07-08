//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// 이미지
import { ReactComponent as UpSvg } from "../../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../../image/Down.svg";

const MainArticleCard = ({ date, title, user, watch, up, down, articleId }) => {
  return (
    <WrapCard>
      <p style={{ width: "244px" }}>
        <Link to={`/detail/article/${articleId}`}>{title}</Link>
      </p>
      <p style={{ width: "56px" }}>{up}</p>
      <p style={{ width: "56px" }}>{down}</p>
      <p style={{ width: "64px" }}>{watch}</p>
      <p style={{ width: "64px" }}>{date}</p>
      <p style={{ width: "64px" }}>{user}</p>
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
