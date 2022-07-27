import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
// 훅
import { toastify } from "../../custom/toastify";
import { deleteCookie } from "../../shared/Cookie";
import { stompNotice } from "../../custom/stomp";
// 모듈
import { loginState } from "../../state/client/login";
import { useMediaQuery } from "react-responsive";
import { addArticleState } from "../../state/client/modal";
import { useHeaderApi } from "../../repeat/useRepeatQuery";

const MyDrupDown = ({ userName }) => {
  // 닉네임 변경 모달창
  const [changeNick, setChangeNick] = useState(false);
  // 변경 닉네임 데이터
  const newNickname = useRef("");
  // 변경 요청
  const { mutate } = useHeaderApi.useChangeNickname(setChangeNick);
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();

  const setLoginState = useSetRecoilState(loginState);
  const setFormState = useSetRecoilState(addArticleState);

  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 370px)",
  });

  const handleCloseToggling = (e) => {
    if (el.current && !el.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseToggling);
    return () => {
      window.removeEventListener("click", handleCloseToggling);
    };
  }, []);

  const onLogout = () => {
    deleteCookie("token");
    localStorage.removeItem("id");
    localStorage.removeItem("profileImg");
    setLoginState(false);
    stompNotice.disSubscribeNotice();
    toastify.success("정상 로그아웃");
  };

  return (
    <WrapDropDown ref={el}>
      <DropDownHeader>
        <button onClick={toggling}>{userName}</button>
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          <ListItem onClick={() => {}}>
            내 등급 : <ListItemP> [새싹] (156/250)</ListItemP>
          </ListItem>
          <ListItem1
            onClick={() => {
              setChangeNick(true);
            }}
          >
            닉네임 변경
          </ListItem1>
          <ListItem1 onClick={() => {}}>내 글 모아보기</ListItem1>
          {isSmall && (
            <ListItem1
              onClick={() => {
                setFormState(true);
              }}
            >
              글작성
            </ListItem1>
          )}

          <ListItem1 onClick={onLogout}>로그아웃</ListItem1>
        </DropDownList>
      )}
      {changeNick && (
        <ChangeNick>
          <div>
            <p>닉네임 변경</p>
            <input
              type="text"
              ref={newNickname}
              placeholder={localStorage.getItem("nickname")}
            />
            <span>영문/국문/숫자 조합 2~12자리</span>
            <div>
              <button
                onClick={() => {
                  mutate(newNickname.current.value);
                }}
              >
                저장
              </button>
              <button
                onClick={() => {
                  setChangeNick(false);
                }}
              >
                취소
              </button>
            </div>
          </div>
        </ChangeNick>
      )}
    </WrapDropDown>
  );
};

export default MyDrupDown;

const WrapDropDown = styled.div`
  position: relative;
`;

const DropDownHeader = styled.div`
  font-size: 12px;
`;

const DropDownList = styled.div`
  position: absolute;
  top: 30px;
  right: -80px;
  width: 200px;
  padding: 8px;
  border: 1px solid var(--gray2);
  border-radius: 6px;
  background: var(--white);
  font-size: 12px;
  line-height: 14px;
  z-index: 99;
`;
const ListItem = styled.p`
  padding: 8px;
  display: flex;
  gap: 4px;
`;

const ListItem1 = styled.p`
  padding: 8px;
  cursor: pointer;
`;

const ListItemP = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: var(--green1);
`;

const ChangeNick = styled.div`
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
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    max-width: 400px;
    width: 80vw;
    max-height: 300px;
    height: 60vw;
    margin: 0 auto;
    > input {
      padding: 15px 10px;
    }
    > span {
      color: var(--gray3);
      font-size: 12px;
    }
    > div {
      display: flex;
      justify-content: center;
      gap: 30px;
      > button {
        width: 100%;
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
