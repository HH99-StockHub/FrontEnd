import React from "react";
import styled from "styled-components";
import { ReactComponent as Notice } from "../../image/Notice.svg";
import { useRef, useEffect } from "react";
import { getCookie } from "../../shared/Cookie";
import { toastify } from "../../custom/toastify";
import { deleteCookie } from "../../shared/Cookie";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginState } from "../../state/client/login";

const MyDrupDown = () => {
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();

  const [login, setLoginState] = useRecoilState(loginState);

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

  const onLogout = (e) => {
    deleteCookie("token");
    localStorage.removeItem("id");
    localStorage.removeItem("profileImg");
    setLoginState(false);
    toastify.success("정상 로그아웃");
  };

  return (
    <>
      <>
        <DropDownContainer ref={el}>
          <DropDownHeader>
            <button onClick={toggling}>들어갈자리</button>
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem onClick={() => {}}>
                  내 등급 : [새싹] (156/250)
                </ListItem>
                <ListItem onClick={() => {}}>내 글 모아보기</ListItem>
                <ListItem onClick={onLogout}>로그아웃</ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </>
    </>
  );
};

const DropDownContainer = styled.div``;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;
const DropDownListContainer = styled.div``;
const DropDownList = styled.div`
  position: absolute;
  padding: 10px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  z-index: 50;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
export default MyDrupDown;
