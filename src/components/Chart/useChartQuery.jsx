import { api } from "../../shared/api";
import { useQuery } from "react-query";

export const useChartQuery = {
  useGetChartData: (stockName) => {
    const fetcher = async () => {
      const { data } = await api.post(`chart`, stockName);
      return data;
    };
    return useQuery(["chart", stockName], fetcher, {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    });
  },
};
