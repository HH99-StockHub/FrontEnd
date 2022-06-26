import React, { useState } from "react";
import styled from "styled-components";

const AddArticleForm = () => {
  // 투자 포인트 map용 배열
  const [countArr, setCountArr] = useState([{ key: 0 }]);
  // key state
  const [key, setKey] = useState(1);
  // 게시글 작성하기
  const writeArticle = (e) => {
    e.preventDefault();
  };
  // 투자 포인트 input 추가하기
  const addTextarea = () => {
    setCountArr([...countArr, { key: key }]);
    setKey(key + 1);
  };
  // 투자 포인트 삭제하기
  const deleteTextarea = (e) => {
    if (countArr.length !== 1) {
      const newArr = countArr.filter(
        (v) => String(v.key) !== String(e.target.id)
      );
      setCountArr(newArr);
    } else {
      alert("최소 하나의 투자 포인트가 있어야합니다.");
    }
  };
  return (
    <WrapForm>
      <form onSubmit={writeArticle}>
        <div>
          <h3>종목 선택</h3>
          <WrapSelect>
            <input type="text" />
            <span>얼마 상승 등 주가</span>
          </WrapSelect>
        </div>
        <div>
          <h3>제목</h3>
          <input type="text" />
        </div>
        <h3>투자 포인트</h3>
        {countArr.map((v, l) => {
          return (
            <div key={v.key}>
              <input type="text" />
              <span id={v.key} onClick={deleteTextarea}>
                삭제
              </span>
              <br></br>
              <TextareaText name={v.key} cols="30" rows="5"></TextareaText>
            </div>
          );
        })}

        <button type="button" onClick={addTextarea}>
          +
        </button>
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
