import React from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";

// 모듈
import { showChart } from "../../state/client/modal";
import DetailChart from "./DetailChart";

const ChartModal = ({ stockName }) => {
  const [chartModalState, setChartModalState] = useRecoilState(showChart);
  return (
    <ReactModal
      isOpen={chartModalState}
      onRequestClose={() => {
        setChartModalState(false);
      }}
      style={{
        overlay: {
          display: "flex",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        content: {
          position: "absolute",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "hidden",
          outline: "none",
          margin: "auto",
          maxWidth: "900px",
          maxHeight: "500px",
          height: "70vw",
        },
      }}
    >
      {stockName !== undefined ? <DetailChart stockName={stockName} /> : null}
    </ReactModal>
  );
};

export default ChartModal;
