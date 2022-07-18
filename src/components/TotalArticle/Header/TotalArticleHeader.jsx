//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
// 컴포넌트
import HeaderCategory from "./HeaderCategory";
import Search from "./Search";

const TotalArticleHeader = React.memo(() => {
  return (
    <Wrap>
      <WrapHeader>
        <HeaderCategory />
        <Search />
      </WrapHeader>
    </Wrap>
  );
});

export default TotalArticleHeader;

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  padding: 16px 0 19px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gray3);
  margin-bottom: 36px;
`;
