import React, { useRef, useEffect } from "react";
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

const MyDrupDown = ({ userName }) => {
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = React.useState(false);
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
    </WrapDropDown>
  );
};

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
export default MyDrupDown;
