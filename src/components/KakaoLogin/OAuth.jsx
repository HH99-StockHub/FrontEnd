import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

// 컴포넌트
import LoadingSpinner from "../../repeat/LoadingSpinner";

// 훅
import { setCookie, getCookie } from "../../shared/Cookie";
import { useLoginQuery } from "./useLoginQuery";
import { toastify } from "../../custom/toastify";
//모듈
import { loginState } from "../../state/client/login";

const OAuth = () => {
  // recoil
  const [, setLoginState] = useRecoilState(loginState);
  const navigate = useNavigate();
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const beforeUrl = sessionStorage.getItem("url");
  const {
    data = false,
    isLoading,
    isError,
  } = useLoginQuery.useKaKaoLogin(code);
  // 로그인 했으면 돌려보내기
  useEffect(() => {
    const cookie = getCookie("token");
    const userId = localStorage.getItem("id");
    if (cookie !== undefined && userId !== null) {
      toastify.info("이미 로그인 됐습니다.");
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      toastify.error("예상치 못한 오류가 발생했습니다. 다시 시도해주세요 ");
      navigate(beforeUrl);
    }
    if (data) {
      const accessToken = data.headers.authorization;
      setCookie("token", accessToken);
      localStorage.setItem("id", data.headers.userid);
      localStorage.setItem("profileImg", data.headers.profileimage);
      setLoginState(true);
      toastify.success("로그인 완료");
      navigate(beforeUrl);
    }
  }, [data]);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div>카카오 로그인 중입니다. 잠시만 기달려주세요</div>
    </>
  );
};

export default OAuth;
