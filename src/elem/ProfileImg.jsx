import React from "react";
import styled, { css } from "styled-components";

const ProfileImg = ({ src, rank, size }) => {
  return <StImg size={size} rank={rank} src={src} alt="프로필 이미지" />;
};

export default ProfileImg;

const StImg = styled.img`
  ${({ size }) => {
    switch (size) {
      case "size1":
        return size1;
      case "size2":
        return size2;
      case "size3":
        return size3;
      default:
        break;
    }
  }}
  ${({ rank }) => {
    switch (rank) {
      case "신입":
        return rank1;
      case "초보":
        return rank2;
      case "중수":
        return rank3;
      case "고수":
        return rank4;
      case "지존":
        return rank5;
      default:
        return rank5;
    }
  }}
  border-radius: 50%;
`;

export const size1 = css`
  width: 52px;
  height: 52px;
`;
export const size2 = css`
  width: 24px;
  height: 24px;
`;
export const size3 = css`
  width: 32px;
  height: 32px;
`;
export const rank1 = css`
  border: 1px solid var(--green1);
`;
export const rank2 = css`
  border: 1px solid var(--green2);
`;
export const rank3 = css`
  border: 1px solid var(--blue1);
`;
export const rank4 = css`
  border: 1px solid var(--blue2);
`;
export const rank5 = css`
  border: 1px solid var(--pink2);
`;
