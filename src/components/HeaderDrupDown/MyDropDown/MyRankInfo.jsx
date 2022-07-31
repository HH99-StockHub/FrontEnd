import React from "react";
import styled from "styled-components";

import { ReactComponent as XBtn } from "../../../image/XBtn.svg";

const MyRankInfo = ({ rank, exp, setRankInfo }) => {
  const nickName = localStorage.getItem("nickName");

  const nextRank = () => {
    switch (rank) {
      case "신입":
        return `초보`;
      case "초보":
        return `중수`;
      case "중수":
        return `고수`;
      case "고수":
        return `지존`;
      case "지존":
        return `최고 등급`;
      default:
        return `최고 등급`;
    }
  };
  const nextExp = () => {
    switch (rank) {
      case "신입":
        return `까지 ${10 - exp}점 남았습니다.`;
      case "초보":
        return `까지  ${100 - exp}점 남았습니다.`;
      case "중수":
        return `까지  ${200 - exp}점 남았습니다.`;
      case "고수":
        return `까지  ${500 - exp}점 남았습니다.`;
      case "지존":
        return ``;
      default:
        return ``;
    }
  };
  return (
    <WrapRankInfo>
      <div>
        <button
          onClick={() => {
            setRankInfo(false);
          }}
        >
          <XBtn width="9px" height="9px" fill="var(--black)" />
        </button>
      </div>
      <WrapText>
        <div>
          <p>
            {nickName}님은 <RankColor state={rank}>{rank}</RankColor>
            입니다.
          </p>
          <p>
            <NextRankColor state={rank}>{nextRank()}</NextRankColor>
            {nextExp()}
          </p>
        </div>
        <p>게시글 작성 + 30점, 댓글 작성 +5점, 인기글 달성 +50점</p>
      </WrapText>
    </WrapRankInfo>
  );
};

export default MyRankInfo;

const WrapRankInfo = styled.div`
  position: absolute;
  top: 0;
  left: 175px;
  padding: 12px 10px;
  width: 240px;
  height: 100%;
  background-color: var(--white);
  border-radius: 6px;
  @media screen and (max-width: 440px) {
    position: fixed;
    height: 200px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    margin: auto;
  }
`;
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  p {
    font-size: 12px;
    text-align: center;
  }
  > p {
    width: 167px;
    height: 36px;
    line-height: 17px;
    color: var(--green1);
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const RankColor = styled.span`
  font-weight: 700;
  color: ${({ state }) => {
    switch (state) {
      case "신입":
        return "var(--green1)";
      case "초보":
        return "var(--green2)";
      case "중수":
        return "var(--blue1)";
      case "고수":
        return "var(--blue2)";
      case "지존":
        return "var(--pink2)";
      default:
        return "var(--pink2)";
    }
  }};
`;

const NextRankColor = styled.span`
  font-weight: 700;
  color: ${({ state }) => {
    switch (state) {
      case "신입":
        return "var(--green2)";
      case "초보":
        return "var(--blue1)";
      case "중수":
        return "var(--blue2)";
      case "고수":
        return "var(--pink2)";
      case "지존":
        return "var(--pink2)";
      default:
        return "var(--pink2)";
    }
  }};
`;
