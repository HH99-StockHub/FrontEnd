import React from "react";
import { useEffect } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { api } from './../../shared/api';


const OAuth = () => {
const REST_API_KEY = "109a5b2ba9c02b2ec241fb9116f2ea46";
const REDIRECT_URI = "http://13.209.88.160:8080/user/kakao/callback";
const CLIENT_SECRET = "5nMhFCsSqPef7Rly7FVZWKs6BxFhcqJQ";

const [searchParams] = useSearchParams();

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await api.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return null;
};

export default OAuth