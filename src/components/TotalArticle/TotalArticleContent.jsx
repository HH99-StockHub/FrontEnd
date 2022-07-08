import React from "react";
import styled from "styled-components";
import TotalArticleList from "./TotalArticleList";




const TotalArticleContent = ({ data }) => {
  return (
    <div>
      <Table>
        <TotalArticleList data={data} />
      </Table>
    </div>
  );
};

export default TotalArticleContent;

const Table = styled.div`
  width: 1240px;
  margin: 0 auto;
  text-align: left;
`;
