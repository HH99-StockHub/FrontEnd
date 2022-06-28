import React from "react";
import styled from "styled-components";

const CardImg = ({ imgUrl }) => {
  return (
    <div>
      <CompanyImg src={imgUrl} alt="회사 로고" />
    </div>
  );
};

export default CardImg;

const CompanyImg = styled.img`
  border: 1px solid #000;
  width: 32px;
  height: 32px;
`;
