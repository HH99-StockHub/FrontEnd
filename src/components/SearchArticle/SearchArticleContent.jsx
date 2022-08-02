import React, { useEffect } from "react";
import LoadingSpinner from "../../repeat/LoadingSpinner";
import TotalArticleList from "../TotalArticle/TotalArticleList";
import TotalPagenation from "../TotalArticle/TotalPagenation";
import NotSearch from "./NotSearch";
import { useGetSearchArticle } from "./useSearchArticleQuery";
import { toastify } from "../../custom/toastify";

const SearchArticleContent = ({ category, keyword, page }) => {
  const { data, isLoading, isError } = useGetSearchArticle.useGetSearchKeyword(
    category,
    keyword,
    page,
  );
  useEffect(() => {
    if (data?.totalPages === 0) toastify.error("관련 게시글이 없습니다.");
  }, [data?.totalPages]);
  if (isLoading) return <LoadingSpinner />;
  if (isError) toastify.error("게시글 불러오기를 실패했습니다.");

  return (
    <>
      {data?.totalPages === 0 ? (
        <NotSearch />
      ) : (
        <>
          <TotalArticleList
            data={data?.content === undefined ? [] : data.content}
          />
          <TotalPagenation
            category={category}
            keyword={keyword}
            nowPage={page}
            totalPages={data?.totalPages}
            type="search"
          />
        </>
      )}
    </>
  );
};

export default SearchArticleContent;
