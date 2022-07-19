import React from "react";
import styled from "styled-components";
import { useState } from "react";
//훅
import { toastify } from "../../custom/toastify";
// 이미지
import { ReactComponent as XBtnSvg } from "../../image/XBtn.svg";

const AddArticleChoosePoint = ({ choosePoint }) => {
  const [countArr, setCountArr] = useState([{ key: 0 }]);
  const [key, setKey] = useState(1);
  const [pointBtnState, setPointBtnState] = useState(true);

  // 투자 포인트 input 추가하기
  const addTextarea = () => {
    if (countArr.length < 3) {
      setCountArr([...countArr, { key: key }]);
      setKey(key + 1);
      if (countArr.length === 2) setPointBtnState(false);
    } else {
      toastify.info("최대 3개까지 등록 가능합니다");
    }
  };
  // 투자 포인트 삭제하기
  const deleteTextarea = (e, index) => {
    if (countArr.length !== 1) {
      const newArr = countArr.filter((v, l) => {
        return String(l) !== String(index);
      });
      setCountArr(newArr);
      setPointBtnState(true);
    } else {
      toastify.info("최소 하나의 투자 포인트가 있어야합니다.");
    }
  };
  return (
    <>
      <div ref={choosePoint}>
        {countArr.map((v, l) => {
          return (
            <WrapTextarea key={v.key}>
              <WrapPointHeader>
                <p>투자 포인트 {l + 1} (최대 3개 작성 가능)</p>
                {l === 0 ? null : (
                  <button
                    type="button"
                    onClick={(e) => {
                      deleteTextarea(e, l);
                    }}
                  >
                    <XBtnSvg width="6.59" height="6.59" fill="var(--pink1)" />
                  </button>
                )}
              </WrapPointHeader>
              <input id={l} type="text" placeholder="투자포인트 요약" />

              <br></br>
              <TextareaText
                name={l}
                cols="30"
                rows="5"
                placeholder="상세내용 작성"
              />
            </WrapTextarea>
          );
        })}
      </div>
      {pointBtnState && (
        <PlusBtn type="button" onClick={addTextarea}>
          투자포인트 추가
        </PlusBtn>
      )}
    </>
  );
};

export default AddArticleChoosePoint;

const WrapPointHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  > p {
    font-size: 12px;
  }
  > button {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const WrapTextarea = styled.div`
  input {
    width: 100%;
    height: 44px;
    padding: 14.5px 10px;
    margin-bottom: 8px;
  }
`;

const TextareaText = styled.textarea`
  width: 100%;
  height: 137px;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;
`;

const PlusBtn = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  color: var(--white);
  background-color: var(--green2);
`;
