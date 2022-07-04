import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// 훅
import { setCookie, getCookie } from "../../shared/Cookie";
import { useLoginQuery } from "./useLoginQuery";
//모듈
import { loginState } from "../../redux/modules/login";
const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((state) => state.user.loginState);
  const [check, setCheck] = useState(false);
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

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
      alert("이미 로그인 됐습니다.");
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    if (isError) {
      alert("예상치 못한 오류가 발생했습니다. 다시 시도해주세요 ");
      navigate("/");
    }
    if (data) {
      const accessToken = data.headers.authorization;
      setCookie("token", accessToken);
      localStorage.setItem("id", data.headers.userid);
      dispatch(loginState(true));
      setCheck(true);
      alert("로그인 완료");
      navigate(-1);
    }
  }, [data]);
  return (
    <>
      <div>카카오 로그인 중입니다. 잠시만 기달려주세요</div>
    </>
  );
};

export default OAuth;
