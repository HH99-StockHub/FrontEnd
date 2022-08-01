import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// 이미지
import Img from "../../../image/CardHeader.webp";
const CardHeader = ({ title, nickname, userId }) => {
  return (
    <Header>
      <div>{title}</div>
      <div>
        <Link to={`/search/article/${nickname}/${userId}/1`}>
          <p>{nickname + " "} </p>
          <span>님</span>
        </Link>
      </div>
    </Header>
  );
};

export default CardHeader;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 14px 16px 16px;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70px;
  border-radius: 6px 6px 0 0;
  font-family: ‘Pretendard’;
  div {
    color: var(--white);
    font-size: 18px;
    font-weight: 600;
    display: inline-block;
    line-height: 1;
    p {
      display: -webkit-box;
      white-space: normal;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a {
      display: flex;
    }
  }
  div:first-child {
    font-size: 12px;
    font-weight: 400;
  }
`;
