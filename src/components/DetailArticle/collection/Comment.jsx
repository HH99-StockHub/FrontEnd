import React from 'react'
import styled from "styled-components";

const Comment = () => {
  return (
    <Box>
      <h3>댓글달기</h3>
      <Label>
      <Views placeholder='상세내용 작성'></Views>
      <Btn>보내기</Btn>
      </Label>
    </Box>
  )
}

const Box = styled.div`
  margin-top: 20px;
  padding: 20px 0px;
`; 

const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #DBDBDB;
    width: 100%;
    margin-top: 20px;
`

const Btn = styled.button`
    background: #DEDEDE;
    padding: 10px ;
    margin-right: 10px;
`

const Views = styled.input`
flex: 8;
  padding: 20px;
  color: #000000;
  font-weight: 700;
  border: 0;
  outline: none;
`;
export default Comment
