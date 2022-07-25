import { api } from "../shared/api";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { alarmList } from "../state/server/alarm";

export const useAlarmMutate = {
  useGetAlarmMutate: () => {
    const setAlarmList = useSetRecoilState(alarmList);
    const fetcher = async (userId) => {
      const response = api.get(`/notice/${"1"}`);
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
};
