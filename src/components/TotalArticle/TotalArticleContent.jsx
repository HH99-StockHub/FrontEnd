import React from "react";
import TotalArticleList from "./TotalArticleList";

const TotalArticleContent = ({ data, isLoading }) => {
  return <TotalArticleList data={data} isLoading={isLoading} />;
};

export default TotalArticleContent;
