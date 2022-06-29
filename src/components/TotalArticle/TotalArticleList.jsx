import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  useGetAllArticles,
  useGetAllMainArticles,
} from "../../custom/reactQuery/useQuery";

const TotalArticleList = ({ data }) => {
  return (
    <>
      {data.map((v) => {
        return (
          <WrapTd>
            <div style={{ width: "72px" }}>
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABBCAMAAADcxMsIAAAAflBMVEX39/f///wAAJkAHp77+/kOJZ8ADZsAG50AAJYAFpx5gL9rc7oAE5wSJ6BvdLqvstXg4u0uO6Zja7cFIZ4YLKLNz+Pq6/Hy8vWMkMXCxd6IjMReZ7Wbn81nbbZbYLKhpdCnq9I9RahQVq2Sl8lGTaslM6QyQanX2ei3utmEhcCySkFsAAADGElEQVRYhe2V25aqOhBFqaJys4OgkQBeABWE/v8f3BW0e1/6AR/PGSPrAUOyzExSRSpJoqKioqKioqKioqL+h4LE+wooNAmCluZX648eqio2P8do8X75kq83fg0megNLx521h61nLxXtfr9vy4CrT0sLzqdXD92vqdp9Vjx2b9uG/O104XYYPxGV7enOYMiHTO0uxToYWulU6swYpp5RPRSewwStUSN2AIMdFeaUwEmnqXJ2gAQ+LOZQaDWybyNThSU0aC88ckaHmCrp18BUYKa8Pzg98dxHZe423S5cZ7ZyA8lotqnMiQopDr5wTvsEQg8UKHaBq8TD3qGR6QckJISc/eBkt8otMUsBtsMjcFuHkxTjk4u9vkFhVWdszweJ3A+X4VHQP1xTy+HFrbTIAO5ab2CN65l7KzhRQlDTDKud0KF5c1jiLilxyK3tgLz89v3DlY1AX7642YGo4jxdj2+nhcONDwv0mvcU9kwL12fW57iZpT0voQu+KpzF31ycWsynby6UTdNMbyTWfLCZUQ1Hp0HX8kSW04gGp6sbTkfsnlz2ZexLyx/7xanT++I3t9W4fs4JEdAdhUCO29moDXRWffIarkInG5xPWM7S8CfCHyjVwfcjr3RZ6Ky039xmm4YZVrBFn/dQHATvCT5SjmQj3Y0xD4FJj/dReubWQMW562E6ZJzbP7iwk136HV/I5RvcRlvNKWjC3FcnGwgJXSU0Cl2VeEsVzFIdgX1SAHwq24f1/Z1XUMs2W7h8IAC9fYM7YSab8Mnl4F0mC6pkxmdOB05tnob3PoflB5+aJz6FhuNh3W3aKE6GF7eUYuHCzpnPeRTholkDt1JovmJMRZM2yJerNboh4mcFxuARco2cJnBZriK74xh4rRTalG0ca9QzJUZK3IfM1EaiwmGNGsD1VZmR72cqj3XNgK4+Mreuj1VolqE7LB+62zhe6+UvfnN9XC9lqAdNnnNG8jNvgqk4tu2lX83moGedoeSPCvOsQ78Lz6tCJRU9Z6TF8SxhFG4cev68Kto75SgqKioqKioqKioq6j+nX9XvOB9derqcAAAAAElFTkSuQmCC"
                }
                alt="회사 로고"
              />
            </div>
            <div style={{ width: "660px" }}>삼전 물리신 분들 모이세요</div>
            <div style={{ width: "72px" }}>22.07.25</div>
            <div style={{ width: "72px" }}>1000</div>
            <div style={{ width: "92px" }}>2000</div>
            <div style={{ width: "92px" }}>3000</div>
            <div style={{ width: "92px" }}>4000</div>
          </WrapTd>
        );
      })}
    </>
  );
};

export default TotalArticleList;

const WrapTd = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0 8px 8px;
  font-size: 12px;
  text-align: center;
  div:nth-child(2) {
    text-align: left;
  }
  > div > img {
    width: 32px;
    height: 32px;
    margin: 0 20px;
  }
`;
