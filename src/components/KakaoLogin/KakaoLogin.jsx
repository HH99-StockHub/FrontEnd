import React from "react";
import { KAKAO_AUTH_URL } from "../../Auth/kakao";
//카카오 로그인

const KakaoLogin = () => {
  return (
    <p
      onClick={() => {
        // 로그인 버튼을 누르는 페이지 url 저장
        const index = window.location.href.indexOf("/", 7);
        sessionStorage.setItem("url", window.location.href.substring(index));
        window.location.href = KAKAO_AUTH_URL;
      }}
    >
      카카오로그인
    </p>
  );
};

export default KakaoLogin;
