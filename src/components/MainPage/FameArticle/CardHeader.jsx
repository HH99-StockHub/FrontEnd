import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// 이미지
import Img from "../../../image/CardHeader.webp";
const CardHeader = ({ title, nickname, userId }) => {
  return (
    <Header>
      <div>{title} 분석글</div>
      <div>
        <Link to={`/search/article/${nickname}/${userId}/1`}>
          {nickname} 님
        </Link>
      </div>
    </Header>
  );
};

export default CardHeader;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 16px 14px 16px 16px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70px;
  border-radius: 6px 6px 0 0;

  div {
    color: var(--white);
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    line-height: 1;
  }
  div:first-child {
    font-size: 12px;
    font-size: 400;
  }
`;
