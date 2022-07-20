import React from "react";
import styled from "styled-components";
//이미지
import { ReactComponent as BannerImg } from "../../image/BannerImg.svg";

const TotalArticleBanner = React.memo(() => {
  return (
    <WrapBanner>
      <BannerText>
        내 주식의 매매 포인트 3가지를 작성하여 수익왕에 도전하세요.
        <br />
        얼마나 수익률이 올랐는지 비교할 수 있어요.
      </BannerText>
      <BannerImg />
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
  width: 80%;
  height: 154px;
  background: var(--green1);
  border-radius: 6px;
`;

const BannerText = styled.div`
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: var(--white);
`;
