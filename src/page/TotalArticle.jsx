import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import TotalArticleBanner from "../components/TotalArticle/TotalArticleBanner";
import TotalArticleContent from "../components/TotalArticle/TotalArticleContent";
import HelmetComponents from "../repeat/HelmetComponents";
import styled from "styled-components";
import SlideStock from "../repeat/SlideStock";

const TotalArticle = () => {
  // 카테고리별 meta title 변경
  const [titleCategory, setTitleCategory] = useState("");
  // URL 정보가져오기
  const { category, page } = useParams();
  // useQuery

  useEffect(() => {
    switch (category) {
      case "all":
        setTitleCategory("전체 게시판");
        break;
      case "popular":
        setTitleCategory("인기 게시판");
        break;
      case "rich":
        setTitleCategory("수익왕 게시판");
        break;
      default:
        break;
    }
  }, [category]);

  return (
    <>
      <SlideStock />
      <HelmetComponents title={`${titleCategory}`} />
      <Box>
        <TotalArticleHeader />
        <TotalArticleBanner />
        <TotalArticleContent page={page} category={category} />
      </Box>
    </>
  );
};

const Box = styled.div`
  position: relative;
  min-height: 90vh;
  background: #f5f5f5;
`;
export default TotalArticle;
