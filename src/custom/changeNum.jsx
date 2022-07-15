import React from "react";

const useChangeNum = (num) => {
  let changeNum;
  if (Number(num) >= 1000000000000) {
    changeNum = parseInt(num / 100000000000) / 10;
    return String(changeNum) + "T";
  } else if (Number(num) >= 1000000000) {
    changeNum = parseInt(num / 100000000) / 10;
    return String(changeNum) + "B";
  } else if (Number(num) >= 1000000) {
    changeNum = parseInt(num / 100000) / 10;
    return String(changeNum) + "M";
  } else if (Number(num) >= 1000) {
    changeNum = parseInt(num / 100) / 10;
    return String(changeNum) + "K";
  } else {
    changeNum = num;
    return changeNum;
  }
};

export default useChangeNum;
