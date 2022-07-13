import React from "react";
import styled from "styled-components";

const View = (props) => {
  const {content1,content2,content3,point1,point2,point3} = props
  return (
    <Box>
      {content1 ?
        <BoxDiv>
      <Views>{content1}</Views>
      <Contents>{point1}</Contents>
      </BoxDiv>
: ""}
{content2 ?
      <BoxDiv>
      <Views>{content2}</Views>
      <Contents>{point2}</Contents>
      </BoxDiv>
: ""}
{content3 ?
      <BoxDiv>
      <Views>{content3}</Views>
      <Contents>{point3}</Contents>
      </BoxDiv>
:""}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;
  gap : 10px
`;

const BoxDiv = styled.div`
border: 1px solid #E0E0E0;
padding: 20px;
`

const Views = styled.div`

  color: #000000;
  font-weight: 700;
`;
const Contents = styled.pre`
  height: 150px;
  width: 100%;
  resize: none;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 15px;
`;

export default View;
