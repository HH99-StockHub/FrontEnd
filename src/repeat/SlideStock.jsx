//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled, { keyframes } from "styled-components";
//이미지
import { ReactComponent as UpArrowSvg } from "../image/UpArrow.svg";

const SlideStock = React.memo(() => {
  // 예시 잉여 arr
  const data = [1, 2, 3, 4, 6, 6, 77, 6, 123, 512, 123, 51];
  return (
    <WrapSlideStock>
      <div>
        <div>
          <StockItem>
            <span>22-06-27</span>
          </StockItem>
          {data.map((v, l) => {
            return (
              <StockBox key={l}>
                <StockItem>
                  <p>
                    S&P 500 <span>4,530.41</span>
                  </p>
                </StockItem>
                <StockItem>
                  <TickerPoint>
                    <span>-1.56</span>
                    <UpArrowSvg />
                  </TickerPoint>
                </StockItem>
              </StockBox>
            );
          })}
        </div>
      </div>
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
    -webkit-animation-duration: 15s;
    animation-duration: 15s;
    > div {
      display: flex;
      gap: 8px;
      align-items: center;
      height: 38px;
    }
  }
`;

const StockItem = styled.div`
  display: flex;
  font-size: 1rem;
  color: #3cc572;
  font-size: 16px;
`;

const StockBox = styled.div`
  display: flex;
  gap: 4px;
`;

const TickerPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
