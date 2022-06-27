//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
//CSS
import "../SlideStock.scss";
const SlideStock = () => {
  return (
    <div>
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker__item">
            <span>22-06-27</span>
          </div>
          <div className="ticker__item">
            <span className="flex">삼성전자</span>
            <span className="flex">58,000</span>
            <span className="flex">-0.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideStock;
