import React from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
// 잉여데이터
import { candleChartDummy } from "../../Data/chartDummy";
const CandleChart = () => {
  const data = candleChartDummy;

  const state = {
    theme: {
      mode: "dark",
      palette: "palette8",
      monochrome: {
        enabled: false,
        color: "#F86624",
        shadeTo: "dark",
        shadeIntensity: 1,
      },
    },

    title: { text: undefined, align: "right" },
    chart: {
      zoom: false,
      type: "candlestick",
      toolbar: {
        // 상단 툴바
        show: false,
        reset: false,
      },
      // 차트 배경색
      background: "white",
    },
    stroke: {
      // 선 두깨 및 옵션
      curve: "smooth",
      width: 2,
    },

    yaxis: {
      // y 축 보이기
      show: true,
      // 왼쪽 오른쪽
      opposite: true,

      reversed: false,
      logarithmic: false,
      tickAmount: 5,
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
      labels: {
        show: true,
        align: "center",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: ["#FF607C", "#54BA7D"],
          fontSize: "12px",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
        // y축 원하는데로 변경하기 , 찍어서 가독성을 높여보자
        formatter: (value) => {
          return parseInt(value);
        },
      },
      axisBorder: {
        // y축 마지막 선 색
        show: true,
        color: "#78909C",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        // 표 끝 금액으로 연결되는 선
        show: true,
        borderType: "solid",
        color: "#f00",
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      // 가로선 색 위로 보일지 선 색 두께
      crosshairs: {
        show: true,
        position: "front",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0,
        },
      },
      // 선색 보일지
      tooltip: {
        enabled: true,
        offsetX: 0,
      },
    },
    xaxis: {
      // type에 따라 그래프가 약간씩 달라짐, date는 축소도 되고 확대하면 넓게
      type: "category",
      //하단 갯수
      tickAmount: 6,
      labels: {
        show: true,
        // 1자로만 보이게
        rotate: 0,
        formatter: function (val, l) {
          // x축 원하는데로 조작하기
          return dayjs(val).format("MM DD");
        },
        style: {
          // 하단 날짜 색
          colors: "#000",
        },
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          // 선 색 #으로 표시해야 배경색도 변경
          upward: "#FF607C",
          downward: "#54BA7D",
        },
        wick: {
          // 선 색 채울건지
          useFillColor: true,
        },
      },
    },
    tooltip: {
      // 마우스 올리면 커스텀 할 수 있는 것
      enabled: true,
      shared: true,
      followCursor: true,
      // x축 값 보이기
      intersect: false,
      inverseOrder: false,
      // 툴 커스텀해서 사용하기
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          "<div>" +
          "<p>" +
          data[dataPointIndex].y[0] +
          "</p>" +
          "<p>" +
          data[dataPointIndex].y[1] +
          "</p>" +
          "<p>" +
          data[dataPointIndex].y[2] +
          "</p>" +
          "<p>" +
          data[dataPointIndex].y[3] +
          "</p>" +
          "</div>"
        );
      },
    },
  };
  return (
    <ReactApexChart
      options={state}
      series={[
        {
          // 툴팁 이름 호버했을 때 보이는
          name: ["price", "gey"],
          data: data,
        },
      ]}
      type="candlestick"
      height="100%"
    />
  );
};

export default CandleChart;
