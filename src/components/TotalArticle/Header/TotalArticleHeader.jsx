//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import HeaderCategory from "./HeaderCategory";
import Search from "./Search";
import WriteArticle from "./WriteArticle";

const TotalArticleHeader = () => {
  return (
    <WrapHeader>
      <HeaderCategory />
      <Search />
      <WriteArticle />
    </WrapHeader>
  );
};

export default TotalArticleHeader;

const WrapHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
