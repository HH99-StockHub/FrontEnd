import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// 컴포넌트
import LoadingSpinner from "../../repeat/LoadingSpinner";

// 훅
import { setCookie, getCookie } from "../../shared/Cookie";
import { useLoginQuery } from "./useLoginQuery";
import { toastify } from "../../custom/toastify";
import { stompNotice } from "../../custom/stomp";
import { useAlarmMutate } from "../../repeat/useRepeatQuery";
//모듈
import { loginState } from "../../state/client/login";
import { alarmList } from "../../state/server/alarm";

const OAuth = () => {
  // recoil
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const beforeUrl = sessionStorage.getItem("url");
  // 로그인하기
  const {
    data = false,
    isLoading,
    isError,
  } = useLoginQuery.useKaKaoLogin(code);
  // 알림 받기
  const { mutate } = useAlarmMutate.useGetAlarmMutate();
  // 알림 recoil
  const setAlarmList = useSetRecoilState(alarmList);
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
      console.log(data);
      const accessToken = data.headers.authorization;
      setCookie("token", accessToken);
      localStorage.setItem("id", data.headers.userid);
      localStorage.setItem("profileImg", data.headers.profileimage);
      localStorage.setItem("nickName", data.headers.nickname);
      setLoginState(true);
      stompNotice.subscribeNotice(data.headers.userid, setAlarmList);
      mutate(data.headers.userid);
      toastify.success("로그인 완료");
      // navigate(beforeUrl);
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
