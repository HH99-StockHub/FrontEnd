import React from "react";
import styled from "styled-components";
//이미지
import { ReactComponent as BannerImg } from "../../image/BannerImg.svg";

const TotalArticleBanner = () => {
  return <WrapBanner>
    <BannerImg/>
  </WrapBanner>;
};

export default TotalArticleBanner;

const WrapBanner = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 154px;
  left: 370px;
  top: 230px;
  background: var(--green1);
  border-radius: 6px;

`;
