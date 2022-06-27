//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";

// 이미지
import { ReactComponent as ArticleSvg } from "../../../image/Article.svg";

const ArticleFameHeader = React.memo(({ title }) => {
  return (
    <WrapHead>
      <WrapTitle>
        <span>
          <ArticleSvg fill="#000" />
        </span>
        <p>{title}</p>
      </WrapTitle>
    </WrapHead>
  );
});
export default ArticleFameHeader;

const WrapHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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
