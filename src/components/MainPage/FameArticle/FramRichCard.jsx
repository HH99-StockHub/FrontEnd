import React from "react";
import styled from "styled-components";
import RichText from "./RichText";
import useSliceNum from "../../../custom/sliceNum";
const FramRichCard = ({ data, index }) => {
  const sliceNum = useSliceNum;
  return (
    <div>
      <WrapCard>
        <WrapText>
          <p>{data.articleTitle}</p>
          <RichText stockReturn={sliceNum(data.stockReturn)} index={index} />
        </WrapText>
      </WrapCard>
    </div>
  );
};

export default FramRichCard;

const WrapCard = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 92px;
  padding: 12px 14px 16px 16px;
  border: 1px solid var(--gray2);
  border-radius: 0 0 6px 6px;
`;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  > p {
    font-size: 14px;
    line-height: 19px;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
