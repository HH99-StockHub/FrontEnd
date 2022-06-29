import React from "react";
import styled from "styled-components";

const TotalArticleBanner = () => {
  return <WrapBanner>게시판에 대한 배너 이미지</WrapBanner>;
};

export default TotalArticleBanner;

const WrapBanner = styled.div`
  margin: 36px auto 19px;
  width: 1200px;
  height: 118px;
  background-color: #eee;
`;
