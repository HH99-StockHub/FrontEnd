import React from "react";
import styled from "styled-components";
// 이미지
import AddArticleFixBtn from "../components/AddArticle/AddArticleFixBtn";
import ChattingFixBtn from "../components/Chat/ChattingFixBtn";

const MenuBtn = () => {
  return (
    <WrapMenuBtn>
      <AddArticleFixBtn />
      <ChattingFixBtn />
    </WrapMenuBtn>
  );
};

export default MenuBtn;

const WrapMenuBtn = styled.div`
  position: fixed;
  right: 48px;
  bottom: 58px;
  border-radius: 50px;
  width: 52px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--green1);
    cursor: pointer;
  }
`;
