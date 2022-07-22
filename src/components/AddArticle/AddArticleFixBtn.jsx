import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toastify } from "../../custom/toastify";

import { getCookie } from "../../shared/Cookie";
// 이미지
import { ReactComponent as BtnSvg } from "../../image/AddArticle.svg";
import { addArticleState } from "../../state/client/modal";

const AddArticleFixBtn = ({ state }) => {
  // 토글 state 관리 recoil
  const setModalState = useSetRecoilState(addArticleState);
  // 게시글 작성 토글 오픈
  const openTogle = () => {
    const token = getCookie("token");
    if (token !== undefined) {
      setModalState(true);
    } else {
      toastify.error("작성 전 로그인이 필요합니다");
    }
  };

  return (
    <Btn onClick={openTogle} state={state}>
      <BtnSvg width="18px" height="18px" fill="var(--white)" />
    </Btn>
  );
};

export default AddArticleFixBtn;

const Btn = styled.div`
  transition: 1s;
  ${({ state }) => (state ? "transform: translateY(-60px);" : null)}
`;
