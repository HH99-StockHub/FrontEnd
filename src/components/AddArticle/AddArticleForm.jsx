import React from "react";
import styled from "styled-components";

const AddArticleForm = () => {
  return (
    <WrapForm>
      <form action="#">
        <div>
          <h3>종목 선택</h3>
          <WrapSelect>
            <input type="text" />
            <span>aa</span>
          </WrapSelect>
        </div>
        <div>
          <h3>제목</h3>
          <input type="text" />
        </div>
        <div>
          <h3>투자 포인트</h3>
          <input type="text" />
          <br></br>
          <TextareaText name="text" id="" cols="30" rows="5"></TextareaText>
        </div>
        <button type="button">+</button>
        <div>
          <button type="submit">등록하기</button>
          <button type="button">취소</button>
        </div>
      </form>
    </WrapForm>
  );
};

export default AddArticleForm;

const WrapForm = styled.div`
  border: 1px solid #000;
`;

const WrapSelect = styled.div`
  display: flex;
  span {
    border: 1px solid #000;
  }
`;

const TextareaText = styled.textarea`
  resize: none;
`;
