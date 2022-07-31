import { api } from "../../shared/api";
import { useMutation } from "react-query";

export const useLoginQuery = {
  //kakao login
  useKaKaoLogin: (option) => {
    const fetcher = async (code) => {
      const response = await api.get(`/user/kakao/callback?code=${code}`);
      return response;
    };
    return useMutation(fetcher, option);
  },
};
