import React from "react";
import { useParams } from "react-router-dom";
// 컴포넌트
import TotalArticleList from "../TotalArticle/TotalArticleList";
//query 훅
import { useGetSearchArticle } from "./useSearchArticleQuery";

const SearchArticleList = () => {
  // url을 통한 현재 페이지 정보 가져오기
  const { category, keyword } = useParams();

  const { data = [] } = useGetSearchArticle.useGetSearchKeyword(
    category,
    keyword,
  );
  return (
    <div>
      <TotalArticleList data={data} />
    </div>
  );
};

export default SearchArticleList;
