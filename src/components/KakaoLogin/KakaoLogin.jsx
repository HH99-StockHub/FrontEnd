import React from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../Auth/kakao";
//카카오 로그인

const KakaoLogin = () => {
  return (
    <Login
      onClick={() => {
        // 로그인 버튼을 누르는 페이지 url 저장
        const index = window.location.href.indexOf("/", 9);
        sessionStorage.setItem("url", window.location.href.substring(index));
        window.location.href = KAKAO_AUTH_URL;
      }}
    >
      카카오로그인
    </Login>
  );
};

export default KakaoLogin;

const Login = styled.div`
  font-size: 12px;
  color: var(--green1);
  cursor: pointer;
`;
