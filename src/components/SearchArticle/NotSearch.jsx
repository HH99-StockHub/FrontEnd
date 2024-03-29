import React from "react";
import styled from "styled-components";
import { ReactComponent as NotSvg } from "../../image/NotSearchArticle.svg";

const NotSearch = () => {
  return (
    <WrapBox>
      <NotSvg />
      <p>관련 게시글이 없습니다.</p>
    </WrapBox>
  );
};

export default NotSearch;

const WrapBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 33px;
  margin: 0 auto;
  width: 80%;
  max-width: 1240px;
  height: 80vh;
  max-height: 605px;
  background-color: var(--white);
  > p {
    font-size: 14px;
  }
`;
