import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// 훅
import { toastify } from "../../custom/toastify";
//이미지
import { ReactComponent as Left } from "../../image/Left.svg";
import { ReactComponent as Right } from "../../image/Right.svg";

const TotalPagenation = ({ category, nowPage, totalPages, type, keyword }) => {
  const navigate = useNavigate();
  // 페이지 기준
  const [page, setPage] = useState(1);
  // 버튼 갯수
  const [btnCount, setBtnCount] = useState([1, 2, 3, 4, 5]);

  // 현재 버튼에 CSS 주기위한 값
  const nowCssBtn = () => {
    if (Number(nowPage) % 5 === 0) {
      return 5;
    } else {
      return Number(nowPage) % 5;
    }
  };

  // 페이지 클릭 시 페이지 이동하기
  const navigatePage = (page) => {
    if (type === "total") {
      navigate(`/total/${category}/articles/${page}`);
    } else {
      navigate(`/search/article/${category}/${keyword}/${page}`);
    }
  };

  // 이전 페이지 넘기기
  const navigatePrevious = () => {
    if (page === 1) {
      // 첫 페이지 일 경우
      toastify.error("이전 페이지가 존재하지 않습니다");
    } else {
      if (type === "total") {
        navigate(`/total/${category}/articles/${page}`);
      } else {
        navigate(`/search/article/${category}/${keyword}/${page}`);
      }
      setPage(page - 5);
    }
  };
  // 다음 페이지 넘기기
  const navigateNext = () => {
    // 다음 페이지가 전체 페이지를 넘을 경우
    if (page + 5 > totalPages) {
      toastify.error(`${totalPages} 페이지가 마지막입니다`);
    } else {
      if (type === "total") {
        navigate(`/total/${category}/articles/${page}`);
      } else {
        navigate(`/search/article/${category}/${keyword}/${page}`);
      }
      setPage(page + 5);
    }
  };

  // 주소에 따라 page 설정하기
  useEffect(() => {
    // 페이지가 있을 경우, 없으면 페이지 1번으로
    if (Number(nowPage) <= totalPages && Number(nowPage) >= 1) {
      // 페이지가 한 자릿수 이거나 10일 경우
      if (nowPage.length === 1 || Number(nowPage) === 5) {
        setPage(1);
        // 페이지가 10의 배수일 경우
      } else if (Number(nowPage) % 5 === 0) {
        const startPage =
          String(nowPage.slice(0, 1) - 1) +
          "0".repeat(Number(nowPage.length) - 1);
        setPage(Number(startPage) + 1);
        // 그 외
      } else {
        const startPage =
          String(nowPage.slice(0, 1)) + "0".repeat(Number(nowPage.length) - 1);
        setPage(Number(startPage) + 1);
      }
    } else if (totalPages !== 0) {
      toastify.error("해당 페이지는 존재하지 않습니다");
      if (type === "total") {
        navigate(`/total/${category}/articles/1`);
      } else {
        navigate(`/search/article/${category}/${keyword}/1`);
      }
    }
  }, [category]);

  // 마지막 페이지 리스트일 경우 배열 갯수 조절하기
  useEffect(() => {
    // 마지막 페이지에서 역순 할 경우
    if (Number(page + 4) < Number(totalPages) && btnCount.length !== 5) {
      const arr = [1, 2, 3, 4, 5];
      setBtnCount(arr);
      // 마지막 페이지 리스트일 경우
    } else if (Number(page + 4) > Number(totalPages)) {
      const count = String(totalPages).slice(-1);
      const arr = [1, 2, 3, 4, 5];

      setBtnCount(arr.slice(0, Number(count)));
    }
  }, [page, category, totalPages, keyword]);
  return (
    <WrapAllBtn>
      <button onClick={navigatePrevious}>
        <Left />
      </button>
      <WrapPageBtn num={nowCssBtn()}>
        {btnCount.map((v, l) => {
          return (
            <button
              key={v}
              onClick={() => {
                navigatePage(Number(page) + Number(l));
              }}
            >
              {Number(page) + Number(l)}
            </button>
          );
        })}
      </WrapPageBtn>
      <button onClick={navigateNext}>
        <Right />
      </button>
    </WrapAllBtn>
  );
};

export default TotalPagenation;

const WrapAllBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;
const WrapPageBtn = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 10px;
  }
  > button:nth-child(${({ num }) => Number(num)}) {
    background: var(--green1);
    color: white;
  }
`;
