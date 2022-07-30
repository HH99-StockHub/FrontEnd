import React from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import { useMediaQuery } from "react-responsive";

// 모듈
import { showChart } from "../../state/client/modal";
import DetailChart from "./DetailChart";

const ChartModal = ({ stockName }) => {
  const [chartModalState, setChartModalState] = useRecoilState(showChart);

  const isSmall = useMediaQuery({
    query: "(max-width : 600px)",
  });

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
          maxHeight: "800px",
          height: "80vw",
        },
      }}
    >
      {stockName !== undefined ? <DetailChart stockName={stockName} /> : null}
    </ReactModal>
  );
};

export default ChartModal;
