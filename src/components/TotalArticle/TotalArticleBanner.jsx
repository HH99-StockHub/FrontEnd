import React from "react";
import styled from "styled-components";
//이미지
import bannerImg from "../../image/totalBanner.png";
const TotalArticleBanner = React.memo(() => {
  return (
    <WrapBanner>
      <BannerText>
        주식 종목에 대한 투자 포인트를 공유하고 애널리스트가 되어보세요.
        <br /> 해당 종목에 대한 수익률과 더불어 다른 유저들의 반응을 보여줄게요.
      </BannerText>
      <BannerImg src={bannerImg} alt="배너 이미지" />
    </WrapBanner>
  );
});

export default TotalArticleBanner;

const WrapBanner = styled.div`
  padding: 32px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 90%;
  background: var(--green1);
  border-radius: 6px;
  @media screen and (max-width: 980px) {
    flex-direction: column;
    gap: 25px;
  }
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const BannerText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: var(--white);
`;

const BannerImg = styled.img`
  width: 308px;
  height: 124px;
`;
