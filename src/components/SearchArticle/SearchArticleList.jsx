import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { toastify } from "../../custom/toastify";
import HelmetComponents from "../../repeat/HelmetComponents";
import LoadingSpinner from "../../repeat/LoadingSpinner";
// 컴포넌트
import TotalArticleList from "../TotalArticle/TotalArticleList";
import TotalPagenation from "../TotalArticle/TotalPagenation";
//query 훅
import { useGetSearchArticle } from "./useSearchArticleQuery";

const SearchArticleList = () => {
  // url을 통한 현재 페이지 정보 가져오기
  const { category, keyword, page } = useParams();

  const {
    data = [],
    isLoading,
    isError,
  } = useGetSearchArticle.useGetSearchKeyword(category, keyword, page);

  const topic = () => {
    switch (category) {
      case "keyword":
        return `'${keyword}' 검색 결과`;
      default:
        return `${category} 님의 게시물`;
    }
  };
  if (isError) toastify.error("불러오기를 실패했습니다");

  // 게시글이 없을 경우
  useEffect(() => {
    if (data.totalPages === 0) toastify.error("관련 게시글이 없습니다");
  }, [data.totalPages]);
  return (
    <WrapList>
      <HelmetComponents title={topic()} />
      <p dangerouslySetInnerHTML={{ __html: topic() }}></p>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TotalArticleList
            data={data.content === undefined ? [] : data.content}
          />
          <TotalPagenation
            category={category}
            keyword={keyword}
            nowPage={page}
            totalPages={data.totalPages}
            type="search"
          />
        </>
      )}
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
