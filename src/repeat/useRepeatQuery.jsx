import { api } from "../shared/api";
import { useMutation, useQuery } from "react-query";
import { useSetRecoilState } from "recoil";
import { alarmList } from "../state/server/alarm";
import { toastify } from "../custom/toastify";

export const useAlarmMutate = {
  // 알림받기
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
  // 알림 삭제하기
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
      const response = api.put("/user/nickname", nick);

      return { nick: nick, response: response };
    };
    return useMutation(fetcher, {
      onSuccess: (data) => {
        //닉네임 저장
        setChangeNick(false);
        localStorage.setItem("nickName", data.nick);
        toastify.success(`${data.nick}(으)로 닉네임 변경을 완료했습니다.`);
      },
      onError: (data) => {
        if (
          data.response.response.status === 401 ||
          data.response.response.status === 406
        ) {
          toastify.error(data.response.data.message);
        } else {
          toastify.error("닉네임 변경에 실패했습니다. 다시 시도해주세요");
        }
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
      const response = api.post("/userDetails");
      return response;
    };
    return useQuery("rank", fetcher);
  },
};
