import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { setCookie, getCookie } from "../../shared/Cookie";
import { useLoginQuery } from "./useLoginQuery";
import { toastify } from "../../custom/toastify";
import { stompNotice } from "../../custom/stomp";
import { useAlarmMutate } from "../../repeat/useRepeatQuery";
import { loginState } from "../../state/client/login";
import { alarmList } from "../../state/server/alarm";
import LodingImg from "../../image/Loding.webp";

const OAuth = () => {
  // recoil
  const setLoginState = useSetRecoilState(loginState);
  const navigate = useNavigate();
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const beforeUrl = sessionStorage.getItem("url");
  // // 로그인하기

  // 알림 받기
  const { mutate } = useAlarmMutate.useGetAlarmMutate();
  // 알림 recoil
  const setAlarmList = useSetRecoilState(alarmList);
  const { mutate: login } = useLoginQuery.useKaKaoLogin({
    onSuccess: (data) => {
      const accessToken = data.headers.authorization;
      setCookie("token", accessToken);
      localStorage.setItem("id", data.headers.userid);
      localStorage.setItem("profileImg", data.headers.profileimage);
      localStorage.setItem("nickName", decodeURI(data.headers.nickname));
      setLoginState(true);
      stompNotice.subscribeNotice(data.headers.userid, setAlarmList);
      mutate(data.headers.userid);
      toastify.success("로그인 완료");
      navigate(beforeUrl);
    },
    onError: (data) => {
      toastify.error("예상치 못한 오류가 발생했습니다. 다시 시도해주세요 ");
      navigate(beforeUrl);
    },
  });
  // 로그인 했으면 돌려보내기
  useEffect(() => {
    const cookie = getCookie("token");
    const userId = localStorage.getItem("id");
    if (cookie !== undefined && userId !== null) {
      toastify.info("이미 로그인 됐습니다.");
      navigate(-1);
    } else {
      login(code);
    }
  }, []);

  return (
    <Loding>
      <P>카카오 로그인 중....</P>
      <Img src={LodingImg} alt="로딩 페이지" />
    </Loding>
  );
};

const Loding = styled.div`
  padding: 138px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
  > div {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 460px) {
      flex-direction: column;
    }

    > span {
      position: relative;
      width: 120px;
      height: 20px;
    }
  }
`;

const P = styled.p`
  margin-bottom: 55px;
`;

const Img = styled.img`
  margin-left: 30px;
`;
export default OAuth;
