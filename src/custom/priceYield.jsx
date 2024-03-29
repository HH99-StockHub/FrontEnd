const usePriceYield = (lastStock, nowStock) => {
  if (lastStock > nowStock) {
    const interval = Number(nowStock) - Number(lastStock);
    return parseInt((interval / Number(lastStock)) * 100);
  } else if (lastStock < nowStock) {
    const interval = Number(nowStock) - Number(lastStock);
    return parseInt((interval / Number(lastStock)) * 100);
  } else {
    return 0;
  }
};

export default usePriceYield;
