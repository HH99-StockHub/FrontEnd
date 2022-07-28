import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HelmetComponents from "../../repeat/HelmetComponents";
// 컴포넌트
import SearchArticleContent from "./SearchArticleContent";

const SearchArticleList = () => {
  // url을 통한 현재 페이지 정보 가져오기
  const { category, keyword, page } = useParams();

  const topic = () => {
    switch (category) {
      case "keyword":
        return `'${keyword}' 검색 결과`;
      default:
        return `${category} 님의 게시물`;
    }
  };

  return (
    <WrapList>
      <HelmetComponents title={topic()} />
      <p dangerouslySetInnerHTML={{ __html: topic() }}></p>
      <SearchArticleContent category={category} keyword={keyword} page={page} />
    </WrapList>
  );
};

export default SearchArticleList;

const WrapList = styled.div`
  max-width: 1240px;
  width: 90%;
  margin: 0 auto;
  margin-top: -12px;
  > p {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    > p {
      padding-left: 20px;
    }
  }
`;
