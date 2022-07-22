import React from "react";
import styled from "styled-components";
import { ReactComponent as Notice } from "../../image/Notice.svg";
import { useRef, useEffect } from "react";

const DrupDown = () => {
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();

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

  return (
    <>
      <>
        <DropDownContainer ref={el}>
          <DropDownHeader>
            <button onClick={toggling}>
              <Notice />
            </button>
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem onClick={() => {}}>공지사항</ListItem>
                <ListItem onClick={() => {}}>공지사항</ListItem>
                <ListItem onClick={() => {}}>공지사항</ListItem>
                <ListItem onClick={() => {}}>공지사항</ListItem>
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
export default DrupDown;
