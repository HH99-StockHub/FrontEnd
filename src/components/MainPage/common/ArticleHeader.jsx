//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ArticleHeader = React.memo(({ title, link }) => {
  return (
    <WrapHead>
      <h3>{title}</h3>
      <Link to={`/${link}`}>
        <button> + 더보기</button>
      </Link>
    </WrapHead>
  );
});
export default ArticleHeader;

const WrapHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
