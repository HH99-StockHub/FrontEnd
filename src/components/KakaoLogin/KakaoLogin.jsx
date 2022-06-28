import React from 'react'
import { api } from "../../shared/api";
import { useQuery , useMutation, useQueryClient } from "react-query";

//카카오 로그인
export const useKakaoLogin = () => {
    const fetcher = async () => {
      const { data } = await api.get(`/user/kakao/callback`);
      return data;
    };
    return useQuery("KakaoLogin", fetcher);
  };

const KakaoLogin = () => {

  return (
    <div>KakaoLogin</div>
  )
}

export default KakaoLogin