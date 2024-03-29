import React from "react";
import styled from "styled-components";
import LoadingSpinner from "../../repeat/LoadingSpinner";
import TotalArticleList from "./TotalArticleList";
import TotalPagenation from "./TotalPagenation";
import { useTotalPageQuery } from "./useTotalPageQuery";

const TotalArticleContent = ({ category, page }) => {
  const { data, isLoading } = useTotalPageQuery.useGetAllArticles(
    category,
    page,
  );
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Div>
          <TotalArticleList
            data={data?.content === undefined ? [] : data.content}
          />
          <TotalPagenation
            category={category}
            nowPage={page}
            totalPages={data?.totalPages}
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
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
