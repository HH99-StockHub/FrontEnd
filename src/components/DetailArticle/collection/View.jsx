import React from "react";
import styled from "styled-components";

const View = () => {
  return (
    <Box>
        <div>
      <Views>앞으로의 반도체 전망</Views>
      <Contents placeholder="내용 작성"></Contents>
      </div>
      <div>
      <Views>앞으로의 반도체 전망</Views>
      <Contents placeholder="내용 작성"></Contents>
      </div>
      <div>
      <Views>앞으로의 반도체 전망</Views>
      <Contents placeholder="내용 작성"></Contents>
      </div>
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
const Contents = styled.textarea`
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
