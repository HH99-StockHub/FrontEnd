import React from "react";
import styled from "styled-components";

const View = (props) => {
  const {content1,content2,content3,point1,point2,point3} = props
  return (
    <Box>
      {content1 ?
        <div>
      <Views>{content1}</Views>
      <Contents>{point1}</Contents>
      </div>
: ""}
{content2 ?
      <div>
      <Views>{content2}</Views>
      <Contents>{point2}</Contents>
      </div>
: ""}
{content3 ?
      <div>
      <Views>{content3}</Views>
      <Contents>{point3}</Contents>
      </div>
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


const Views = styled.div`
  padding: 20px;
  color: #000000;
  font-weight: 700;
  border: 1px solid #dbdbdb;
`;
const Contents = styled.pre`
  border: 1px solid #dbdbdb;
  height: 150px;
  width: 100%;
  resize: none;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 15px;
`;
export default View;
