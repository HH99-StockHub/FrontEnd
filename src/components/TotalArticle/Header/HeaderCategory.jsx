//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";

//이미지
import { ReactComponent as ArticleSvg } from "../../../image/Article.svg";
const HeaderCategory = () => {
  return (
    <WrapCategory>
      <CurrentCategory>
        <ArticleSvg fill="white" />
        <div>전체 게시판</div>
      </CurrentCategory>
      <Category>
        <ArticleSvg fill="black" />
        <div>전체 게시판</div>
      </Category>
      <Category>
        <ArticleSvg fill="black" />
        <div>인기 게시판</div>
      </Category>
      <Category>
        <ArticleSvg fill="black" />
        <div>수익왕 게시판</div>
      </Category>
      <Category>
        <ArticleSvg fill="black" />
        <div>내 게시글</div>
      </Category>
    </WrapCategory>
  );
};

export default HeaderCategory;
const WrapCategory = styled.div`
  display: flex;
`;

const CurrentCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  /* padding: 8px 12px; */
  width: 120px;
  height: 40px;
  background-color: black;
  color: white;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 20px;

  div {
    font-size: 14px;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  /* padding: 8px 12px; */
  width: 120px;
  height: 40px;
  font-weight: 700;

  div {
    font-size: 14px;
  }
`;
