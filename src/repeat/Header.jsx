import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
// 컴포넌트
import KakaoLogin from "../components/KakaoLogin/KakaoLogin";

// 훅
import { getCookie } from "../shared/Cookie";
import { deleteCookie } from "../shared/Cookie";
import { useAlarmMutate } from "./useRepeatQuery";
import {
  stompConnect,
  stompDisConnect,
  stompLoginConnect,
} from "../custom/stomp";
// 모듈
import { loginState } from "../state/client/login";
import { alarmList } from "../state/server/alarm";
//이미지
import { ReactComponent as Logo } from "../../src/image/Logo.svg";
import LoginHeader from "./LoginHeader";

const Header = React.memo(() => {
  //recoil
  const [login, setLoginState] = useRecoilState(loginState);
  const navigate = useNavigate();

  // 알림 받기
  const { mutate } = useAlarmMutate.useGetAlarmMutate();

  // 알림 recoil
  const setAlarmList = useSetRecoilState(alarmList);

  // 토큰, id 유무 체크
  React.useEffect(() => {
    const cookie = getCookie("token");
    const userId = localStorage.getItem("id");
    const profileImg = localStorage.getItem("profileImg");
    if (cookie !== undefined && userId !== null && profileImg !== null) {
      setLoginState(true);
      stompLoginConnect(cookie, userId, setAlarmList);
      mutate(userId);
    } else {
      stompConnect(cookie);
      deleteCookie("token");
      localStorage.removeItem("id");
    }
    return () => {
      stompDisConnect(cookie);
    };
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
        {login ? <LoginHeader /> : <KakaoLogin>카카오로그인</KakaoLogin>}
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
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

const Logo1 = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
