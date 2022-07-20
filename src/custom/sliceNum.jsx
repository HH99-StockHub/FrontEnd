// 금액 3자리마다 , 찍기
const useSliceNum = (price) => {
  const newPrice = parseInt(price * 100) / 100;
  if (Number.isInteger(newPrice)) {
    const priceList = String(newPrice).split("").reverse();
    const newPriceList = priceList.map((v, l) => {
      return l % 3 === 0 && l !== 0 && v !== "-" ? `${v},` : v;
    });
    return newPriceList.reverse().join("");
  } else {
    const priceList = String(newPrice).split(".")[0].split("").reverse();
    const newPriceList = priceList.map((v, l) => {
      return l % 3 === 0 && l !== 0 && v !== "-" ? `${v},` : v;
    });
    return (
      newPriceList.reverse().join("") + "." + String(newPrice).split(".")[1]
    );
  }
};

export default useSliceNum;
