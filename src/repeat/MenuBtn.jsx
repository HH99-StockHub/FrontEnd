import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

//모듈
import { addArticleState } from "../state/client/modal";

// 이미지
import { ReactComponent as BtnSvg } from "../image/AddArticle.svg";
import AddArticleFixBtn from "../components/AddArticle/AddArticleFixBtn";

const MenuBtn = () => {
  const [btnState, setBtnState] = useState(false);

  const setAddModal = useSetRecoilState(addArticleState);
  return (
    <WrapMenuBtn
      state={btnState}
      onMouseLeave={() => {
        setBtnState(false);
      }}
    >
      <ChatBtn state={btnState}>
        <BtnSvg width="18px" height="18px" fill="var(--pink1)" />
      </ChatBtn>
      <AddArticleFixBtn state={btnState} />
      <div
        onClick={() => {
          setBtnState(true);
        }}
      >
        <BtnSvg width="18px" height="18px" fill="var(--gray3)" />
      </div>
    </WrapMenuBtn>
  );
};

export default MenuBtn;

const WrapMenuBtn = styled.div`
  position: fixed;
  right: 48px;
  bottom: 118px;
  border-radius: 50px;
  ${({ state }) => (state ? "height: 175px;" : "height: 52px;")}
  width: 52px;
  > div {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--green1);
    cursor: pointer;
    z-index: 99;
  }
`;

const ChatBtn = styled.div`
  transition: 1s;
  ${({ state }) => (state ? "transform: translateY(-120px);" : null)}
`;
