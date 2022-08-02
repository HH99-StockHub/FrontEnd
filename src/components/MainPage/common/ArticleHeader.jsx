import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as RightSvg } from "../../../image/RightArrow.svg";
import { ReactComponent as PlusSvg } from "../../../image/Plus.svg";

const ArticleHeader = React.memo(({ title, link }) => {
  return (
    <WrapHead>
      <WrapTitle>{title}</WrapTitle>
      {link && (
        <Link to={link}>
          <p>더보기</p>
          <RightSvg />
        </Link>
      )}
    </WrapHead>
  );
});
export default ArticleHeader;

const WrapHead = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: var(--green1);
  }
`;

const WrapTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
`;
