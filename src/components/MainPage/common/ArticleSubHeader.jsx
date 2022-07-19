import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
// 훅
import { toastify } from "../../../custom/toastify";
// 모듈
import { getCookie } from "../../../shared/Cookie";
import { addArticleState } from "../../../state/client/modal";
// 이미지
import { ReactComponent as MainBannerSvg } from "../../../image/MainPageBanner.svg";

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
  return (
    <SubHeader>
      <WrapSvg>
        <MainBannerSvg />
      </WrapSvg>
      <WrapText>
        <HeadText>
          방구석 애널리스트
          <br />
          <span>'StockHub'</span>입니다
        </HeadText>
        <SubText>
          주식 전망글을 작성하고 <br />
          수익왕이 되는 그 날을 응원합니다!
        </SubText>
        <WriteBtn onClick={openTogle}>글쓰러가기</WriteBtn>
      </WrapText>
    </SubHeader>
  );
});

export default ArticleSubHeader;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 77px;
  width: 100%;
  height: 332px;
  background-color: var(--green1);
`;
const WrapSvg = styled.div`
  margin-bottom: 15px;
`;
const WrapText = styled.div`
  position: relative;
  margin-bottom: 49px;
`;
const HeadText = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 32px;
  height: 94px;
  border-bottom: 21px solid var(--green2);
  color: var(--white);
  font-weight: 400;
  span {
    font-weight: 700;
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
  background-color: var(--green3);
  font-size: 16px;
  font-weight: 700;
  color: var(--white);
`;
