import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
//컴포넌트
import { useDetailArticleGet } from "../useDetailArticle";
import TitleGraph from "./TitleGraph";
import PriceTitle from "./PriceTitle";
import Comment from "./Comment";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import ChartModal from "../../Chart/ChartModal";
import { useMediaQuery } from "react-responsive";

const Title = ({ stockName, id }) => {
  const { data = [], isLoading } = useDetailArticleGet.useNewsSearch(stockName);

  const isMiddle = useMediaQuery({
    query: "(max-width:1240px)",
  });

  return (
    <>
      <Box>
        <NameDiv>
          <PriceTitle stockName={stockName} />
          <TitleGraph stockName={stockName} />
        </NameDiv>
        <NewsBox>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <NewsTitle>{stockName} 관련기사</NewsTitle>
              {data.map((v, l) => {
                return (
                  <Newsb
                    onClick={() => {
                      window.open(v.link, "_blank");
                    }}
                    key={l}
                  >
                    <News dangerouslySetInnerHTML={{ __html: v.title }}></News>
                    <NewsP
                      dangerouslySetInnerHTML={{ __html: v.description }}
                    ></NewsP>
                    <NewsP1>{dayjs(v.pubDate).format("YY-MM-DD")}</NewsP1>
                  </Newsb>
                );
              })}
            </>
          )}
        </NewsBox>
        {isMiddle && <Comment id={id} className="comment2" />}
      </Box>
      {stockName !== undefined ? <ChartModal stockName={stockName} /> : null}
    </>
  );
};

const Newsb = styled.pre`
  padding: 12px 0px;
  border-bottom: 1px solid var(--gray2);
  cursor: pointer;
`;

const NameDiv = styled.div`
  border: 1px solid var(--gray2);
  padding: 0px 24px;
  @media screen and (max-width: 1240px) {
    display: flex;
  }
  @media screen and (max-width: 750px) {
    flex-direction: column;
  } ;
`;

const NewsBox = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid var(--gray2);
  margin-top: 24px;
  padding: 24px 24px;
  min-height: 200px;
`;

const NewsTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--black);
`;

const News = styled.div`
  width: 100%;
  color: var(--black);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewsP = styled.div`
  width: 100%;
  margin-top: 8px;
  font-weight: 300;
  font-size: 12px;
  height: 42px;
  line-height: 14px;
  white-space: normal;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const NewsP1 = styled.pre`
  width: 100%;
  margin-top: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--gray3);
`;

const Box = styled.div`
  min-width: 403px;
  @media screen and (max-width: 1240px) {
    min-width: 0px;
  } ;
`;

export default Title;
