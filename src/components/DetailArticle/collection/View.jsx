import React from "react";
import styled from "styled-components";

const View = (props) => {
  const { content1, content2, content3, point1, point2, point3 } = props;
  return (
    <Box>
      {content1 ? (
        <BoxDiv>
          <Views>{point1}</Views>
          <Contents>{content1}</Contents>
        </BoxDiv>
      ) : (
        ""
      )}
      {content2 ? (
        <BoxDiv>
          <Views>{point2}</Views>
          <Contents>{content2}</Contents>
        </BoxDiv>
      ) : (
        ""
      )}
      {content3 ? (
        <BoxDiv>
          <Views>{point3}</Views>
          <Contents>{content3}</Contents>
        </BoxDiv>
      ) : (
        ""
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;

const BoxDiv = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
`;

const Views = styled.div`
  color: #000000;
  font-weight: 700;
  padding: 3px 0;
`;
const Contents = styled.pre`
  padding: 3px 0;
  margin-top: 12px;
  height: 150px;
  width: 100%;
  resize: none;
  line-height: 18px;
  font-size: 16px;
  font-weight: 400;
  overflow: auto;
  white-space: pre-wrap;
`;

export default View;
