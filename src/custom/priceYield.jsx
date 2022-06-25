import React from "react";
import useSliceNum from "./sliceNum";

const usePriceYield = (lastStock, nowStock) => {
  if (lastStock > nowStock) {
    const interval = Number(nowStock) - Number(lastStock);
    return parseInt((interval / Number(lastStock)) * 100);
    // return ` - ${useSliceNum(percent)}`;
  } else if (lastStock < nowStock) {
    const interval = Number(nowStock) - Number(lastStock);
    return parseInt((interval / Number(lastStock)) * 100);
    // return ` + ${useSliceNum(percent)}`;
  } else {
    return 0;
  }
};

export default usePriceYield;
