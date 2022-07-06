import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TotalArticleList = ({ data }) => {
  return (
    <>
      {data.map((v) => {
        return (
          <WrapTd key={v.articleId}>
            <div style={{ width: "72px" }}>
              <img src={v.profileImage} alt="프로필" />
            </div>
            <Link to={`/detail/article/${v.articleId}`}>
              <div style={{ width: "660px" }}>{v.articleTitle}</div>
            </Link>
            <div style={{ width: "72px" }}>{v.createdAt}</div>
            <div style={{ width: "72px" }}>{v.viewCount}</div>
            <div style={{ width: "92px" }}>{v.voteUpCount}</div>
            <div style={{ width: "92px" }}>{v.voteDownCount}</div>
            <div style={{ width: "92px" }}>{v.stockReturn}</div>
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
  a > div {
    text-align: left;
  }
  > div > img {
    width: 32px;
    height: 32px;
    margin: 0 20px;
  }
`;
