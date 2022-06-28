//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";

const ArticleImgCard = ({ imgUrl }) => {
  return (
    <div>
      <CompanyImg src={imgUrl} alt="회사로고" />
    </div>
  );
};

export default ArticleImgCard;

const CompanyImg = styled.img`
  border: 1px solid #000;
  width: 72px;
  height: 72px;
`;
