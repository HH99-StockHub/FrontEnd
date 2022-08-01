import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toastify } from "../../custom/toastify";
import { getCookie } from "../../shared/Cookie";
import { ReactComponent as BtnSvg } from "../../image/AddArticle.svg";
import { addArticleState } from "../../state/client/modal";

const AddArticleFixBtn = () => {
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
    <WrapAddBtn onClick={openTogle}>
      <BtnSvg width="18px" height="18px" fill="var(--white)" />
    </WrapAddBtn>
  );
};

export default AddArticleFixBtn;

const WrapAddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--green1);
  cursor: pointer;
`;
