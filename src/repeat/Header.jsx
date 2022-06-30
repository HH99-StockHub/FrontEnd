import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// 컴포넌트
import KakaoLogin from "../components/KakaoLogin/KakaoLogin";
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { setCookie } from "../shared/Cookie";
import { loginState } from "../redux/modules/login";
import { togleState } from "../redux/modules/addArticle";

const Header = () => {
  const dispatch = useDispatch();
  // 로그인 상태관리
  const login = useSelector((state) => state.user.loginState);

  // 로그아웃
  const onLogout = (e) => {
    deleteCookie("token");
    localStorage.removeItem("id");
    dispatch(loginState(false));
    alert("정상 로그아웃");
  };

  const openAddArticle = () => {
    dispatch(togleState(true));
  };

  // 토큰, id 유무 체크
  React.useEffect(() => {
    const cookie = getCookie("token");
    const userId = localStorage.getItem("id");
    if (cookie !== undefined && userId !== undefined) {
      dispatch(loginState(true));
    } else {
      deleteCookie("token");
      localStorage.removeItem("id");
    }
  }, []);
  return (
    <Header1>
      <Logo>S.H.LOGO</Logo>
      <Header2>
        {login ? (
          <>
            <Profile>프로필</Profile>
            <Notice>알림</Notice>
            <LogOut onClick={onLogout}>로그아웃</LogOut>
            <Post>내 게시물</Post>
            <Writing onClick={openAddArticle}>글작성</Writing>
          </>
        ) : (
          <KakaoLogin>카카오로그인</KakaoLogin>
        )}
      </Header2>
    </Header1>
  );
};

export default Header;

const Header1 = styled.div`
  justify-content: space-between;
  display: flex;
  height: 72px;
  width: 100%;
  background: #d9d9d9;
`;

const Header2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 72px;
  width: 1980px;
`;

const Logo = styled.div`
  width: 89px;
  height: 33px;
  left: 390px;
  top: 19px;

  font-weight: 700;
  font-size: 20px;
  line-height: 33px;
  font-family: "Karma";
  font-style: normal;

  color: #000000;
`;

const Profile = styled.div`
  width: 24px;
  height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Notice = styled.button`
  background-color: transparent;
  border: 0;
  /* 알림 */
  width: 23px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const LogOut = styled.button`
  background-color: transparent;
  border: 0;
  /* 로그아웃 */
  width: 45px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;
`;

const Post = styled.button`
  background-color: transparent;
  border: 0;
  /* 내 게시물 */
  width: 48px;
  height: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #000000;
  /* Inside auto layout */
  flex: none;
  order: 3;
  flex-grow: 0;
`;

const Writing = styled.button`
  background-color: transparent;
  border: 0;
  //글작성
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  width: 54px;
  height: 35px;
  background: #272727;
  /* Inside auto layout */
  flex: none;
  order: 4;
  flex-grow: 0;
`;

const Login = styled.button`
  /* 카카오 로그인 */
  position: absolute;
  width: 73px;
  height: 15px;
  right: 390px;
  top: 28px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #000000;
`;
