import React, { useRef } from "react";
import styled from "styled-components";
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
    <>
      <Back></Back>
      <ChangeNickBox>
        <form
          onSubmit={(e) => {
            changeNickName(e);
          }}
        >
          <div>
            <DivBox>
              <span>현재 닉네임</span>
              <p>{localStorage.getItem("nickName")}</p>
            </DivBox>
            <DivBox>
              <span>변경 닉네임</span>
              <input type="text" ref={newNickname} />
            </DivBox>
            <span>영문/국문/숫자 조합 2~12자리</span>
          </div>
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
    </>
  );
};

export default ChangeNick;

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ChangeNickBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: auto;
  max-width: 320px;
  max-height: 220px;
  width: 90%;
  height: 90vw;
  padding: 30px 30px 20px 30px;
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

    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: left;
      gap: 9px;
      > span {
        color: var(--gray3);
        font-size: 12px;
        text-align: right;
        margin-right: 8px;
      }
    }
    > div:nth-child(2) {
      display: flex;
      gap: 8px;
      > button {
        width: 85px;
        height: 34px;
        border: 1px solid var(--gray2);
        font-size: 12px;
        color: var(--gray3);
        &:first-child {
          background-color: var(--green1);
          color: var(--white);
          border: 1px solid var(--green1);
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
  > span {
    font-weight: 500;
  }
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
