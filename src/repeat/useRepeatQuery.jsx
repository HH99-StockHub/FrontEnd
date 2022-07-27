import { api } from "../shared/api";
import { useMutation } from "react-query";
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
};
