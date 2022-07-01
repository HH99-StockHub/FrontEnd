import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
// 훅
import { api } from "./../../shared/api";
import { setCookie } from "../../shared/Cookie";
import { loginState } from "../../redux/modules/login";

const OAuth = () => {
  const dispatch = useDispatch();
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const fetcher = async () => {
    const response = await api.get(`/user/kakao/callback?code=${code}`);
    return response;
  };
  const { data = false, isLoading, isError } = useQuery("kakoLogin", fetcher);

  if (data) {
    const accessToken = data.headers.authorization;
    setCookie("token", accessToken);
    localStorage.setItem("id", data.headers.userid);
    dispatch(loginState(true));
    alert("로그인 완료");
    navigate("/");
  }
  if (isError) {
    alert("예상치 못한 오류가 발생했습니다. 다시 시도해주세요 ");
    navigate("/");
  }

  return (
    <>
      <div>카카오 로그인 중입니다. 잠시만 기달려주세요</div>
    </>
  );
};

export default OAuth;
