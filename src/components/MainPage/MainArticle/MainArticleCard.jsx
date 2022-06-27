//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import { ReactComponent as UpSvg } from "../../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../../image/Down.svg";

const MainArticleCard = ({ date, title, user, watch, up, down }) => {
  return (
    <WrapCard>
      <td>{date}</td>
      <td>{title}</td>
      <td>{user}</td>
      <td>{watch}</td>
      <UpDownTd>
        <UpSvg />
        <span>{up}</span>
      </UpDownTd>
      <UpDownTd>
        <DownSvg />
        <span>{down}</span>
      </UpDownTd>
    </WrapCard>
  );
};

export default MainArticleCard;

const WrapCard = styled.tr`
  font-size: 12px;
  td {
    padding: 8px 0 8px 8px;
  }
`;

const UpDownTd = styled.td`
  position: relative;
  padding: 0 0 0 8px;
  span {
    position: absolute;
    top: 6px;
    margin-left: 4px;
  }
`;
