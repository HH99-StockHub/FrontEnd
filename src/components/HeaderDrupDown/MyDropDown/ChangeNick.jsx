import React, { useRef } from "react";
import styled from "styled-components";
// 훅
import { toastify } from "../../../custom/toastify";
import { useHeaderApi } from "../../../repeat/useRepeatQuery";

const ChangeNick = ({ setChangeNick }) => {
  const newNickname = useRef("");
  const { mutate } = useHeaderApi.useChangeNickname(setChangeNick);

  // 닉네임 변경
  const changeNickName = (e) => {
    e.preventDefault();
    if (
      newNickname.current.value === "" ||
      newNickname.current.value.indexOf(" ") !== -1
    ) {
      toastify.error("빈칸이나 공백이 있습니다.");
    } else {
      mutate(newNickname.current.value);
    }
  };
  return (
    <ChangeNickBox>
      <form
        onSubmit={(e) => {
          changeNickName(e);
        }}
      >
        <DivBox>
          <span>현재 닉네임</span>
          <p>{localStorage.getItem("nickName")}</p>
        </DivBox>
        <DivBox>
          <span>변경 닉네임</span>
          <input type="text" ref={newNickname} />
        </DivBox>
        <span>영문/국문/숫자 조합 2~12자리</span>
        <div>
          <button type="submit">저장</button>
          <button
            type="button"
            onClick={() => {
              setChangeNick(false);
            }}
          >
            취소
          </button>
        </div>
      </form>
    </ChangeNickBox>
  );
};

export default ChangeNick;

const ChangeNickBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 600px;
  max-height: 400px;
  width: 90vw;
  height: 70vw;
  background-color: var(--white);
  border: 1px solid var(--gray2);
  border-radius: 6px;
  z-index: 99;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 400px;
    width: 80vw;
    max-height: 300px;
    height: 60vw;
    margin: 0 auto;
    > span {
      color: var(--gray3);
      font-size: 12px;
    }
    > div {
      display: flex;
      justify-content: left;
      gap: 30px;
      > button {
        width: 64px;
        padding: 10px 0;
        border-radius: 6px;
        border: 1px solid var(--green1);
        &:first-child {
          background-color: var(--green1);
          color: var(--white);
        }
      }
    }
  }
`;
const DivBox = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 21px;

  > p,
  input {
    max-width: 220px;
    width: 60%;
    height: 33px;
    padding: 9px 6px;
    font-weight: 700;
    font-size: 12px;
  }
  > p {
    color: var(--gray3);
    border: var(--gray2);
    background-color: var(--gray1);
  }
  > input {
    border: 1px solid var(--gray1);
  }
`;
