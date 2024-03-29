import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toastify } from "../../custom/toastify";
import { ReactComponent as Left } from "../../image/Left.svg";
import { ReactComponent as Right } from "../../image/Right.svg";

const TotalPagenation = ({ category, nowPage, totalPages, type, keyword }) => {
  const navigate = useNavigate();
  // 페이지 기준
  const [page, setPage] = useState(nowPage);
  // 버튼 갯수
  const standardPage = Math.ceil(page / 5) * 5;
  const [btnCount, setBtnCount] = useState([
    standardPage - 4,
    standardPage - 3,
    standardPage - 2,
    standardPage - 1,
    standardPage,
  ]);
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
    if (Number(btnCount[0]) === 1) {
      // 첫 페이지 일 경우
      toastify.error("이전 페이지가 존재하지 않습니다");
    } else {
      if (type === "total") {
        navigate(`/total/${category}/articles/${btnCount[0] - 1}`);
      } else {
        navigate(`/search/article/${category}/${keyword}/${btnCount[0] - 1}`);
      }
      setPage(page - 5);
    }
  };
  // 다음 페이지 넘기기
  const navigateNext = () => {
    // 다음 페이지가 전체 페이지를 넘을 경우
    if (Number(btnCount[0]) + 5 > totalPages) {
      toastify.error(`${totalPages} 페이지가 마지막입니다`);
    } else {
      if (type === "total") {
        navigate(`/total/${category}/articles/${Number(btnCount[4]) + 1}`);
      } else {
        navigate(
          `/search/article/${category}/${keyword}/${Number(btnCount[4]) + 1}`,
        );
      }
    }
  };
  useEffect(() => {
    setPage(nowPage);
    const standardPage = Math.ceil(nowPage / 5) * 5;
    if (totalPages < standardPage) {
      setBtnCount(
        [
          standardPage - 4,
          standardPage - 3,
          standardPage - 2,
          standardPage - 1,
          standardPage,
        ].slice(0, totalPages % 5),
      );
    } else {
      setBtnCount([
        standardPage - 4,
        standardPage - 3,
        standardPage - 2,
        standardPage - 1,
        standardPage,
      ]);
    }
  }, [nowPage, totalPages]);
  // 주소에 따라 page 설정하기
  useEffect(() => {
    // 페이지가 있을 경우, 없으면 페이지 1번으로
    if (Number(nowPage) <= totalPages && Number(nowPage) >= 1) {
      // 페이지가 한 자릿수 이거나 5일 경우
      if (nowPage.length === 1 || Number(nowPage) === 5) {
        setPage(1);
        // 페이지가 5의 배수일 경우
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
                navigatePage(v);
              }}
            >
              {v}
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
