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
      <WrapTitle>
        <span>
          <ArticleSvg fill="#000" />
        </span>
        <p>{title}</p>
      </WrapTitle>
      <Link to={link}>
        <PlusSvg />
        <button>더보기</button>
      </Link>
    </WrapHead>
  );
});
export default ArticleHeader;

const WrapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    gap: 5px;
    align-items: center;
    button {
      font-size: 12px;
      border: none;
    }
  }
`;

const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-size: 20px;
    font-weight: 700;
  }
`;
