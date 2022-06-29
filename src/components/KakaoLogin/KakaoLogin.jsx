import React from "react";
import { api } from "../../shared/api";
import { useQuery } from "react-query";

//카카오 로그인
const REDIRECT_URI = "http://13.209.88.160:8080/user/kakao/callback";
const REST_API_KEY = "109a5b2ba9c02b2ec241fb9116f2ea46"
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const useKakaoLogin = ({ payload }) => {
  const fetcher = async () => {
    const { data } = await api.get(`/user/kakao/callback?code=${payload}`);
    return data;
  };
  return useQuery("KakaoLogin", fetcher);
};

const KakaoLogin = () => {
  return (
    <a href={KAKAO_AUTH_URL}>
      카카오로그인
    </a>
  );
};

export default KakaoLogin;
