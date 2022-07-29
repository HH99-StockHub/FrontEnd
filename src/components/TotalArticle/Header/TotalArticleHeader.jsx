//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
// 컴포넌트
import HeaderCategory from "./HeaderCategory";
import Search from "./Search";

const TotalArticleHeader = React.memo(({ detail = true }) => {
  const isSmall = useMediaQuery({
    query: "(max-width: 760px)",
  });

  return (
    <WrapSmallMedia>
      <Wrap>
        <WrapHeader>
          <HeaderCategory />
          {!isSmall && <Search />}
        </WrapHeader>
      </Wrap>
      {isSmall && detail && <Search />}
    </WrapSmallMedia>
  );
});

export default TotalArticleHeader;

const WrapSmallMedia = styled.div`
  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }
`;
const Wrap = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gray2);
  margin-bottom: 36px;
  background-color: var(--white);
  @media screen and (max-width: 760px) {
    margin-bottom: 24px;
  }
`;
const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 90%;
  padding: 16px 0 19px;
  margin: 0 auto;
  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;
