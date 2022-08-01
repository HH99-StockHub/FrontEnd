import React from "react";
import styled from "styled-components";
import NotFoundImg from "../image/NotFound.webp";
import Img404 from "../image/Img404.webp";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Not404>
      <Link to="/">
        <HomeBt>홈으로 가기</HomeBt>
      </Link>
      <ImgN404 src={Img404} alt="404" />
      <PageP>요청하신 페이지를 찾을 수 없습니다.</PageP>
      <img src={NotFoundImg} alt="사진" />
    </Not404>
  );
};

export default NotFound;

const Not404 = styled.div`
  padding: 149px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HomeBt = styled.button`
  background: var(--green1);
  border-radius: 999px;
  font-weight: 700;
  width: 136px;
  height: 42px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: var(--white);
  margin-bottom: 20px;
`;

const ImgN404 = styled.img`
  margin-bottom: 16px;
`;

const PageP = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 27px;
`;
