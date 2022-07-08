//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// 이미지
import { ReactComponent as ArticleSvg } from "../../../image/Article.svg";
import { ReactComponent as PlusSvg } from "../../../image/Plus.svg";

const ArticleHeader = React.memo(({ title, link }) => {
  return (
    <WrapHead>
      <WrapTitle>{title}</WrapTitle>
      {link && (
        <Link to={link}>
          <PlusSvg width={"10px"} height="10px" fill="#54ba7d" />
        </Link>
      )}
    </WrapHead>
  );
});
export default ArticleHeader;

const WrapHead = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 24px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
`;

const WrapTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;
