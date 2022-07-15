import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// 이미지
import { ReactComponent as BtnSvg } from "../../image/AddArticle.svg";
import { togleState } from "../../redux/modules/toggleState";
const AddArticleFixBtn = React.memo(() => {
  const dispatch = useDispatch();
  // 게시글 작성 토글 오픈
  const openTogle = () => {
    dispatch(togleState(true));
  };

  return (
    <Btn onClick={openTogle}>
      <BtnSvg width="18px" height="18px" fill="var(--white)" />
    </Btn>
  );
});

export default AddArticleFixBtn;

const Btn = styled.div`
  position: fixed;
  right: 48px;
  bottom: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--green1);
  cursor: pointer;
`;
