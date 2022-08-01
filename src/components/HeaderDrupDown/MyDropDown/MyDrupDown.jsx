import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
// 훅
import { toastify } from "../../../custom/toastify";
import { deleteCookie } from "../../../shared/Cookie";
import { stompNotice } from "../../../custom/stomp";
// 모듈
import { loginState } from "../../../state/client/login";
import { useMediaQuery } from "react-responsive";
import { addArticleState } from "../../../state/client/modal";
import ChangeNick from "./ChangeNick";
import MyRankInfo from "./MyRankInfo";

const MyDrupDown = ({ data }) => {
  // 경험치 총량
  const expPoint = () => {
    switch (data.rankTitle) {
      case "신입":
        return 10;
      case "초보":
        return 100;
      case "중수":
        return 200;
      case "고수":
        return 500;
      case "지존":
        return "???";
      default:
        return 500;
    }
  };
  const navigate = useNavigate();
  // 추가 드롭다운 창
  const [rankInfo, setRankInfo] = useState(false);
  const [changeNick, setChangeNick] = useState(false);

  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();

  const setLoginState = useSetRecoilState(loginState);
  const setFormState = useSetRecoilState(addArticleState);

  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 520px)",
  });
  const isMostSmall = useMediaQuery({
    query: "(max-width : 420px)",
  });
  const handleCloseToggling = (e) => {
    if (el.current && !el.current.contains(e.target)) {
      setChangeNick(false);
      setRankInfo(false);
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
      <WrapNameRank state={data.rankTitle} onClick={toggling}>
        <DropDownHeader>{localStorage.getItem("nickName")}</DropDownHeader>
        {!isMostSmall && <span>{data.rankTitle}</span>}
      </WrapNameRank>
      {isOpen && (
        <DropDownList state={rankInfo}>
          {isSmall && (
            <ListItem1
              onClick={() => {
                setFormState(true);
                setIsOpen(false);
              }}
            >
              글쓰기
            </ListItem1>
          )}
          <ListItem
            onClick={() => {
              setChangeNick(false);
              setRankInfo(!rankInfo);
            }}
          >
            내 등급 :
            <ListItemP>
              {` [${data?.rankTitle}] : (${data?.expPoint}/${expPoint()})`}
            </ListItemP>
          </ListItem>
          <ListItem1
            onClick={() => {
              setRankInfo(false);
              setChangeNick(!changeNick);
            }}
          >
            닉네임 수정
          </ListItem1>
          <ListItem1
            onClick={() => {
              navigate(
                `/search/article/${localStorage.getItem(
                  "nickName",
                )}/${localStorage.getItem("id")}/1`,
              );
              setIsOpen(false);
            }}
          >
            내 글 모아보기
          </ListItem1>
          <ListItem1
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
          >
            로그아웃
          </ListItem1>
          {rankInfo && (
            <MyRankInfo
              rank={data?.rankTitle}
              exp={data?.expPoint}
              setRankInfo={setRankInfo}
            />
          )}
          {changeNick && <ChangeNick setChangeNick={setChangeNick} />}
        </DropDownList>
      )}
    </WrapDropDown>
  );
};

export default MyDrupDown;

const WrapDropDown = styled.div`
  position: relative;
`;

const WrapNameRank = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
  > span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ state }) => {
      switch (state) {
        case "신입":
          return "var(--green1)";
        case "초보":
          return "var(--green2)";
        case "중수":
          return "var(--blue1)";
        case "고수":
          return "var(--blue2)";
        case "지존":
          return "var(--pink2)";
        default:
          return "var(--pink2)";
      }
    }};
  }
`;

const DropDownHeader = styled.div`
  font-size: 12px;
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropDownList = styled.div`
  position: absolute;
  top: 30px;
  right: ${({ state }) => {
    return state ? "180px" : "-60px";
  }};
  width: 180px;
  padding: 8px 0;
  border-radius: 6px;
  background: var(--white);
  font-size: 12px;
  line-height: 14px;
  z-index: 99;
  > p:hover {
    background-color: var(--green1);
    color: var(--white);
    > span {
      color: var(--white);
    }
  }
  @media screen and (max-width: 460px) {
    right: -40px;
  }
`;
const ListItem = styled.p`
  padding: 8px;
  display: flex;
  gap: 4px;
  cursor: pointer;
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
