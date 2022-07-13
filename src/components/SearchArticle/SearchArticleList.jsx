import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// 컴포넌트
import TotalArticleList from "../TotalArticle/TotalArticleList";
//query 훅
import { useGetSearchArticle } from "./useSearchArticleQuery";

const SearchArticleList = () => {
  // url을 통한 현재 페이지 정보 가져오기
  const { category, keyword } = useParams();

  const { data = [], isLoading } = useGetSearchArticle.useGetSearchKeyword(
    category,
    keyword,
  );

  const topic = () => {
    switch (category) {
      case "keyword":
        return `'${keyword}' 검색 결과`;
      case "user":
        return `${keyword} 님의 게시물`;
      default:
        break;
    }
  };

  return (
    <WrapList>
      <p>{topic()}</p>
      <TotalArticleList data={data} isLoading={isLoading} />
    </WrapList>
  );
};

export default SearchArticleList;

const WrapList = styled.div`
  max-width: 1240px;
  width: 80%;
  margin: 0 auto;
  margin-top: -12px;
  > p {
    margin-bottom: 24px;
  }
`;
