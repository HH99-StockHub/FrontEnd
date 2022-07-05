import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// 컴포넌트
import KakaoLogin from "../components/KakaoLogin/KakaoLogin";
// 훅
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
// 모듈
import { loginState } from "../redux/modules/login";
import { togleState } from "../redux/modules/addArticle";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    if (cookie !== undefined && userId !== null) {
      dispatch(loginState(true));
    } else {
      deleteCookie("token");
      localStorage.removeItem("id");
    }
  }, []);
  return (
    <Header1>
      <Header2>
        <Logo
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CvI_Ck9anQpBAd_DJrVAgLb55GeoSItofg&usqp=CAU"
          alt="로고"
          onClick={() => {
            navigate("/");
          }}
        />
        {login ? (
          <WrapMenu>
            <Profile
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWExS1AoV6x8lezZ77vBE2UjroomZ032soUw&usqp=CAU"
              alt="프로필"
            />
            <Notice>알림</Notice>
            <button onClick={onLogout}>로그아웃</button>
            <button>내 게시물</button>
            <Writing onClick={openAddArticle}>글작성</Writing>
          </WrapMenu>
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
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 89px;
  height: 33px;
  left: 390px;
  top: 19px;
  cursor: pointer;
`;
const WrapMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 35px;
  button {
    height: 100%;
    font-size: 12px;
    font-weight: 400px;
  }
`;

const Profile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Notice = styled.button`
  font-weight: 700;
  font-size: 12px;
`;

const Writing = styled.button`
  width: 54px;
  background-color: #000;
  color: #fff;
`;
