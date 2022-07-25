import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// 컴포넌트
import AddArticleFixBtn from "../components/AddArticle/AddArticleFixBtn";
import ChattingFixBtn from "../components/Chat/ChattingFixBtn";
// 모듈
import { loginState } from "../state/client/login";

const MenuBtn = () => {
  const login = useRecoilValue(loginState);
  return (
    <>
      {login && (
        <WrapMenuBtn>
          <AddArticleFixBtn />
          <ChattingFixBtn />
        </WrapMenuBtn>
      )}
    </>
  );
};

export default MenuBtn;

const WrapMenuBtn = styled.div`
  position: fixed;
  right: 48px;
  bottom: 58px;
  border-radius: 50px;
  width: 52px;
`;
