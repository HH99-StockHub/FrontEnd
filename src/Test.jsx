import axios from "axios";
import React from "react";
import { ID_KEY, SECRET_KEY } from "./Auth/Naver";

const Test = () => {
  const search = async () => {
    const aaa = "신고";
    try {
      const response = await axios.get("https://dapi.kakao.com/v2/search/web", {
        params: {
          query: "어밴져스",
          sort: "accuracy", // accuracy | recency 정확도 or 최신
          page: 1, // 페이지번호
          size: 10, // 한 페이지에 보여 질 문서의 개수
        },
        headers: {
          Authorization: "KakaoAK 4220e2ec6ba3b76c0d4bc6cc408df9d6",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={search}>버튼입니다!!</button>
    </div>
  );
};

export default Test;
