import dayjs from "dayjs";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartDummy } from "../../Data/chartDummy";

const LineChart = () => {
  const state = {
    series: [
      {
        // tool에 표시될 내용
        name: "마감 가",
        data: lineChartDummy,
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
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        type: "category",
        // 갯수
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return dayjs(new Date(val)).format("YY / DD");
          },
        },
      },
      tooltip: {
        shared: false,
        // tooltip에서 나타내는 y축 수치
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      height="100%"
    />
  );
};

export default LineChart;
