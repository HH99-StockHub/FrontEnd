import { api } from "../shared/api";
import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { alarmList } from "../state/server/alarm";
import { toastify } from "../custom/toastify";

export const useAlarmMutate = {
  useGetAlarmMutate: () => {
    const setAlarmList = useSetRecoilState(alarmList);
    const fetcher = async (userId) => {
      const response = api.get(`/notice/${userId}`);
      return response;
    };
    return useMutation(fetcher, {
      onSuccess: ({ data }) => {
        setAlarmList((list) => {
          return [...list, ...[...data].reverse()];
        });
      },
    });
  },
  useReadAlarmMutate: () => {
    const setAlarmList = useSetRecoilState(alarmList);
    const fetcher = async (noticeId) => {
      api.delete(`/notice/${noticeId}`);
      return noticeId;
    };
    return useMutation(fetcher, {
      onSuccess: (data) => {
        setAlarmList((list) => {
          const newList = list.filter((v) => {
            return v.noticeId !== data ? true : false;
          });
          return newList;
        });
      },
    });
  },
};

export const useHeaderApi = {
  // 닉네임 변경
  useChangeNickname: (setChangeNick) => {
    const fetcher = async (nick) => {
      const response = api.put("/user/nickname", { newNickname: nick });
      return response;
    };
    return useMutation(fetcher, {
      onSuccess: (data) => {
        //닉네임 저장
        setChangeNick(false);
      },
      onError: () => {
        toastify.error("닉네임이 유효하지 않습니다");
      },
    });
  },

  // stock 슬라이드 배너
  useGetSlideStock: () => {
    const fetcher = async () => {
      const response = api.get("/indices");
      return response;
    };
    return useQuery("slideStock", fetcher, {
      cacheTime: 1000 * 60 * 15,
    });
  },
  // 등급 받아오기
  useGetRank: () => {
    const fetcher = async () => {
      const { data } = api.post("/user/rank");
      return data;
    };
    return useQuery("rank", fetcher);
  },
};
