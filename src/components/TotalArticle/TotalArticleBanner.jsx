import React from "react";
import styled from "styled-components";
//이미지
import bannerImg from "../../image/totalBanner.png";
const TotalArticleBanner = React.memo(() => {
  return (
    <WrapBanner>
      <BannerText>
        내 주식의 매매 포인트 3가지를 작성하여 수익왕에 도전하세요.
        <br />
        얼마나 수익률이 올랐는지 비교할 수 있어요.
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
