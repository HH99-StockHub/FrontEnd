import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";
import { toastify } from "../../../custom/toastify";
import { getCookie } from "../../../shared/Cookie";
import { addArticleState } from "../../../state/client/modal";
import bannerImg from "../../../image/mainBanner.png";

const ArticleSubHeader = React.memo(() => {
  // 게시글 작성 토글 상태관리 recoil
  const setFormModal = useSetRecoilState(addArticleState);
  const openTogle = () => {
    const token = getCookie("token");
    if (token !== undefined) {
      setFormModal(true);
    } else {
      toastify.error("작성 전 로그인이 필요합니다");
    }
  };

  // media
  const isSmall = useMediaQuery({
    query: "(max-width:900px)",
  });
  const isMostSmall = useMediaQuery({
    query: "(max-width:355px)",
  });
  return (
    <SubHeader>
      {isSmall ? (
        <div>
          <WrapText>
            <HeadText className="title">
              방구석 애널리스트들을
              <br />
              위한<span> Stock Hub</span>입니다.
            </HeadText>
            <SubText>
              투자 인사이트를 나누고 <br />
              수익왕이 되는 그날을 응원합니다!
            </SubText>
          </WrapText>
          <MobileStyle>
            <WriteBtn onClick={openTogle}>글 쓰러 가기</WriteBtn>
            {!isMostSmall && <BannerImg src={bannerImg} alt="배너 이미지" />}
          </MobileStyle>
        </div>
      ) : (
        <>
          <BannerImg src={bannerImg} alt="배너 이미지" />
          <WrapText>
            <HeadText className="title">
              방구석 애널리스트들을
              <br />
              위한<span> Stock Hub</span>입니다.
            </HeadText>
            <SubText>
              투자 인사이트를 나누고 <br />
              수익왕이 되는 그날을 응원합니다!
            </SubText>
            <WriteBtn onClick={openTogle}>글 쓰러 가기</WriteBtn>
          </WrapText>
        </>
      )}
    </SubHeader>
  );
});

export default ArticleSubHeader;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 153px;
  width: 100%;
  height: 332px;
  background: linear-gradient(90deg, #52b97b 0%, #3f957b 100.51%);
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
    margin: 0 auto;
  }
`;

const BannerImg = styled.img`
  width: 442px;
  height: 259px;
  margin-bottom: 15px;
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 120px;
    margin: 0;
  }
`;
const WrapText = styled.div`
  margin-bottom: 49px;
  @media screen and (max-width: 900px) {
    min-width: 290px;
    margin: 0;
  }
`;
const HeadText = styled.div`
  padding: 10px 0;
  margin-bottom: 20px;
  font-size: 30px;
  height: 94px;
  color: var(--white);
  font-weight: 400;
  span {
    font-weight: 700;
  }
  @media screen and (max-width: 360px) {
    font-size: 30px;
  }
`;

const SubText = styled.div`
  margin-bottom: 28px;
  font-size: 18px;
  font-weight: 500;
  color: var(--white);
`;

const WriteBtn = styled.button`
  width: 152px;
  height: 46px;
  border-radius: 50px;
  background-color: var(--green1);
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`;

const MobileStyle = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
