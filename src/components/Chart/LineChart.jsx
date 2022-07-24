import dayjs from "dayjs";
import React, { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import useSliceNum from "../../custom/sliceNum";
import { lineChartDummy } from "../../Data/chartDummy";
import LoadingSpinner from "../../repeat/LoadingSpinner";
import { useChartQuery } from "./useChartQuery";

const LineChart = ({ stockName }) => {
  const { data = lineChartDummy, isLoading } =
    useChartQuery.useGetChartData(stockName);
  const lineChartData = useMemo(() => {
    const newDataList = data.chart.reverse().map((v) => {
      return { x: v[0], y: v[3] };
    });
    return newDataList;
  }, [data]);

  // 숫자 , 찍기
  const sliceNum = useSliceNum;

  const state = {
    series: [
      {
        // tool에 표시될 내용
        name: "종가",
        data: lineChartData,
      },
    ],
    options: {
      stroke: {
        // 두께 조절
        width: 1,
      },
      // 차트 색 변경
      colors: ["#f00"],
      chart: {
        // 하단 색
        foreColor: "#373d3f",
        type: "area",
        stacked: false,
        zoom: {
          type: "x",
          enabled: false,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
          show: false,
          tools: {
            download: false,
          },
        },
      },
      // 꼭지점에 가격표시하기
      dataLabels: {
        enabled: false,
      },
      // 꼭지점
      markers: {
        size: 0,
      },
      // 그래프 그라데이션으로 채우기
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          // 그라데이션 색 변경
          inverseColors: false,
          // 색 범위
          opacityFrom: 0.4,
          // 진하기
          opacityTo: 0.6,
          // 그라데이션 색 조정
          stops: [0, 100, 100],
        },
      },
      yaxis: {
        opposite: true,
        //y축에 나타나는 가격 tooltip과는 따로 논다
        labels: {
          formatter: function (value) {
            return sliceNum(parseInt(value)) + "원";
          },
        },
      },
      xaxis: {
        type: "category",
        // 갯수
        tickAmount: 5,
        labels: {
          offsetX: 4,
          rotate: 0,
          formatter: function (value) {
            return `${value?.slice(4, 6)}/${value?.slice(6, 8)}`;
          },
        },
      },
      tooltip: {
        shared: false,
        // tooltip에서 나타내는 y축 수치
        y: {
          formatter: function (value) {
            return sliceNum(parseInt(value)) + "원";
          },
        },
      },
    },
  };
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height="100%"
        />
      )}
    </>
  );
};

export default LineChart;
