import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
// 훅
import { toastify } from "../../custom/toastify";
import { deleteCookie } from "../../shared/Cookie";
import { stompNotice } from "../../custom/stomp";
// 모듈
import { loginState } from "../../state/client/login";

const MyDrupDown = () => {
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();

  const setLoginState = useSetRecoilState(loginState);

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
    <div ref={el}>
      <DropDownHeader>
        <button onClick={toggling}>들어갈자리</button>
      </DropDownHeader>
      {isOpen && (
        <div>
          <DropDownList>
            <ListItem onClick={() => {}}>
              내 등급 :<ListItemP>[새싹] (156/250)</ListItemP>
            </ListItem>
            <ListItem1 onClick={() => {}}>내 글 모아보기</ListItem1>
            <ListItem1 onClick={onLogout}>로그아웃</ListItem1>
          </DropDownList>
        </div>
      )}
    </div>
  );
};

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownList = styled.div`
  position: absolute;
  padding: 8px;
  background: var(--white);
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  z-index: 50;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  display: flex;
`;

const ListItem1 = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;

const ListItemP = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: var(--green1);
`;
export default MyDrupDown;
