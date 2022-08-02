import React from "react";
import styled, { keyframes } from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { useHeaderApi } from "./useRepeatQuery";

const SlideStock = React.memo(() => {
  const { data = { data: [] }, isLoading } = useHeaderApi.useGetSlideStock();
  const date = new Date();
  return (
    <WrapSlideStock>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div>
            {data.data.map((v) => {
              return (
                <StockBox key={v.id}>
                  <StockItem>
                    <p>{v.indexName} </p>
                    <span>{v.lastPrice}</span>
                  </StockItem>
                  <StockItem>
                    <TickerPoint>
                      <p>{v.change} </p>
                      <span>({v.changeRate})</span>
                    </TickerPoint>
                  </StockItem>
                </StockBox>
              );
            })}
          </div>
        </div>
      )}
    </WrapSlideStock>
  );
});

export default SlideStock;

const ticker = keyframes`
   0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const WrapSlideStock = styled.div`
  width: 100%;
  overflow: hidden;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.9);
  box-sizing: content-box;
  > div {
    display: inline-block;
    gap: 16px;
    height: 40px;
    white-space: nowrap;
    padding: 0 0 0 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ${ticker};
    animation-name: ${ticker};
    -webkit-animation-duration: 60s;
    animation-duration: 60s;
    > div {
      display: flex;
      gap: 40px;
      align-items: center;
      height: 38px;
    }
  }
`;

const StockItem = styled.div`
  display: flex;
  font-size: 1rem;
  gap: 8px;
  color: var(--green1);
  font-size: 16px;
  > p {
    font-weight: 700;
  }
`;

const StockBox = styled.div`
  display: flex;
  gap: 10px;
`;

const TickerPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
