import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
// 컴포넌트
import KakaoLogin from "../components/KakaoLogin/KakaoLogin";
import DropDown from "../components/DrupDown/DrupDown";
// 훅
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
// 모듈
import { addArticleState } from "../state/client/modal";
import { loginState } from "../state/client/login";
//이미지
import { ReactComponent as Logo } from "../../src/image/Logo.svg";
import MyDrupDown from "../components/DrupDown/MyDrupDown";

const Header = React.memo(() => {
  //recoil
  const setFormState = useSetRecoilState(addArticleState);
  const [login, setLoginState] = useRecoilState(loginState);
  const navigate = useNavigate();

  const openAddArticle = () => {
    setFormState(true);
  };

  // 토큰, id 유무 체크
  React.useEffect(() => {
    const cookie = getCookie("token");
    const userId = localStorage.getItem("id");
    const profileImg = localStorage.getItem("profileImg");

    if (cookie !== undefined && userId !== null && profileImg !== null) {
      setLoginState(true);
    } else {
      deleteCookie("token");
      localStorage.removeItem("id");
    }
  }, []);

  return (
    <Header1>
      <Header2>
        <Logo1>
          <Logo
            onClick={() => {
              navigate("/");
            }}
          />
        </Logo1>
        {login ? (
          <WrapMenu>
            <DropDown />
            <Profile
              src={localStorage.getItem("profileImg")}
              alt="프로필 이미지"
            />
            <div>이름</div>
            <MyDrupDown />
            <Writing onClick={openAddArticle}>글작성</Writing>
          </WrapMenu>
        ) : (
          <KakaoLogin>카카오로그인</KakaoLogin>
        )}
      </Header2>
    </Header1>
  );
});

export default Header;

const Header1 = styled.div`
  justify-content: space-between;
  display: flex;
  height: 72px;
  width: 100%;
  background: var(--white);
`;

const Header2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 1200px;
  margin: 0 auto;
`;

const Logo1 = styled.div`
  &:hover {
    cursor: pointer;
  }
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
  background-color: #3cc472;
  color: var(--white);
`;
