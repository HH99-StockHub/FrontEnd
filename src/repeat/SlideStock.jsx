//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
//CSS
import "../CSS/SlideStock.scss";
//이미지
import { ReactComponent as UpArrowSvg } from "../image/UpArrow.svg";

const SlideStock = React.memo(() => {
  // 예시 잉여 arr
  const data = [1, 2, 3, 4, 6, 6, 77, 6];
  return (
    <div className="ticker-wrap">
      <div className="ticker">
        <div className="ticker__item">
          <span>22-06-27</span>
        </div>
        {data.map((v, l) => {
          return (
            <div className="stockBox" key={l}>
              <div className="ticker__item">
                <p>
                  S&P 500 <span>4,530.41</span>
                </p>
              </div>
              <div className="ticker__item">
                <div className="tickerPoint">
                  <span>-1.56</span>
                  <UpArrowSvg />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SlideStock;
