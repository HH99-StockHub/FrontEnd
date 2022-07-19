import { api } from "../../shared/api";
import { useQuery } from "react-query";

export const useLoginQuery = {
  //kakao login
  useKaKaoLogin: (code) => {
    const fetcher = async () => {
      const response = await api.get(`/user/kakao/callback?code=${code}`);
      return response;
    };
    return useQuery("kakoLogin", fetcher, {
      refetchOnWindowFocus: false,
    });
  },
};
