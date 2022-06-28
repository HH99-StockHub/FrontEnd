import React from "react";

// 금액 3자리마다 , 찍기
const useSliceNum = (price) => {
  const priceList = String(price).split("").reverse();
  const newPriceList = priceList.map((v, l) => {
    return l % 3 === 0 && l !== 0 && v !== "-" ? `${v},` : v;
  });

  return newPriceList.reverse().join("");
};

export default useSliceNum;
