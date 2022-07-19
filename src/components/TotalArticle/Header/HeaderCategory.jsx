//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderCategory = () => {
  // 주소 받아오기
  const { category } = useParams();
  // 카테고리 관련 하드코딩 배열
  const arr = [
    { category: "all", name: "전체 게시판" },
    { category: "popular", name: "인기 게시판" },
    { category: "rich", name: "수익왕 게시판" },
  ];
  return (
    <WrapCategory>
      {arr.map((v, l) => {
        return category === v.category ? (
          <Link to={`/total/${v.category}/articles/1`} key={v.category}>
            <CurrentCategory>
              <div>{v.name}</div>
            </CurrentCategory>
          </Link>
        ) : (
          <Link to={`/total/${v.category}/articles/1`} key={v.category}>
            <Category>
              <div>{v.name}</div>
            </Category>
          </Link>
        );
      })}
    </WrapCategory>
  );
};

export default HeaderCategory;
const WrapCategory = styled.div`
  display: flex;
`;

const CurrentCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  height: 40px;
  background: #3cc472;
  color: white;
  font-weight: 700;
  border-radius: 25px;
  font-size: 14px;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
`;
