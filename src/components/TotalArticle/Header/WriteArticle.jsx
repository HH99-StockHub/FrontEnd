//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
//이미지
import { ReactComponent as ArticleSvg } from "../../../image/Article.svg";

const WriteArticle = () => {
  return (
    <Category>
      <ArticleSvg fill="black" />
      <div>글쓰기</div>
    </Category>
  );
};

export default WriteArticle;

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
