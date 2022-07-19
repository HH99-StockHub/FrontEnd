import React from "react";
import styled from "styled-components";

// 컴포넌트
import LoadingSpinner from "../../repeat/LoadingSpinner";
import TotalArticleList from "./TotalArticleList";
import TotalPagenation from "./TotalPagenation";
// 훅
import { useTotalPageQuery } from "./useTotalPageQuery";
import { toastify } from "../../custom/toastify";

const TotalArticleContent = ({ category, page }) => {
  // return <TotalArticleList data={data} isLoading={isLoading} />;
  const { data, isLoading, isError } = useTotalPageQuery.useGetAllArticles(
    category,
    page,
  );
  if (isError) {
    toastify.error("불러오기를 실패했습니다");
  }
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Div>
          <TotalArticleList
            data={data.content === undefined ? [] : data.content}
          />
          <TotalPagenation
            category={category}
            nowPage={page}
            totalPages={data.totalPages}
            type="total"
          />
        </Div>
      )}
    </>
  );
};

export default TotalArticleContent;
const Div = styled.div`
  max-width: 1240px;
  width: 80%;
  margin: 0 auto;
`;
