//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
//CSS
import "../SlideStock.scss";
import style from 'styled-components';
const SlideStock = () => {
  return (
    <SlideStock1>
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
    </SlideStock1>
  );
};

const SlideStock1 = style.div`
  position: absolute;
  width: 1980px;
  height: 40px;
  left: 0px;
  top:72px;

  background: #999999
`

export default SlideStock;
