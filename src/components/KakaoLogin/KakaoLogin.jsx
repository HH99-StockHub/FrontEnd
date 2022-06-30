import React from "react";
import { KAKAO_AUTH_URL } from "../../Auth/kakao";
//카카오 로그인

const KakaoLogin = () => {
  return <a href={KAKAO_AUTH_URL}>카카오로그인</a>;
};

export default KakaoLogin;
