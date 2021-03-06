import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Porfile = ({ img, nickname, userId }) => {
  return (
    <WrapProfile>
      <img src={img} alt="프로필" />
      <p>
        <Link to={`/search/article/${nickname}/${userId}`}>
          by. {nickname} 님
        </Link>
      </p>
    </WrapProfile>
  );
};

export default Porfile;

const WrapProfile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    color: var(--gray3);
  }
`;
