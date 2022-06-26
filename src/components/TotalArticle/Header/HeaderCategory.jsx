//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

//이미지
import { ReactComponent as ArticleSvg } from "../../../image/Article.svg";

const HeaderCategory = () => {
  const { category } = useParams();
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    switch (category) {
      case "all":
        setCategoryName("전체 게시판");
        break;
      case "popular":
        setCategoryName("인기 게시판");
        break;
      case "rich":
        setCategoryName("수익왕 게시판");
        break;
      case "user":
        setCategoryName("내 게시글");
        break;
      default:
        break;
    }
    return () => {
      setCategoryName("");
    };
  }, [category]);

  return (
    <WrapCategory>
      <Link to="/">
        <CurrentCategory>
          <ArticleSvg fill="white" />
          <div>{categoryName}</div>
        </CurrentCategory>
      </Link>
      <Link to="/total/all/articles">
        <Category>
          <ArticleSvg fill="black" />
          <div>전체 게시판</div>
        </Category>
      </Link>
      <Link to="/total/popular/articles">
        <Category>
          <ArticleSvg fill="black" />
          <div>인기 게시판</div>
        </Category>
      </Link>
      <Link to="/total/rich/articles">
        <Category>
          <ArticleSvg fill="black" />
          <div>수익왕 게시판</div>
        </Category>
      </Link>
      <Link to="/total/user/articles">
        <Category>
          <ArticleSvg fill="black" />
          <div>내 게시글</div>
        </Category>
      </Link>
    </WrapCategory>
  );
};

export default HeaderCategory;
const WrapCategory = styled.div`
  display: flex;
`;

const CurrentCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  /* padding: 8px 12px; */
  width: 120px;
  height: 40px;
  background-color: black;
  color: white;
  font-weight: 700;
  border: 1px solid #000;
  border-radius: 20px;

  div {
    font-size: 14px;
  }
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  /* padding: 8px 12px; */
  width: 120px;
  height: 40px;
  font-weight: 700;

  div {
    font-size: 14px;
  }
`;
