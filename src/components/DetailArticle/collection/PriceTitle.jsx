import React from "react";
import styled from "styled-components";

// 컴포넌트
import LoadingSpinner from "../../../repeat/LoadingSpinner";
// 훅
import { useDetailArticleGet } from "../useDetailArticle";

//이미지
import { ReactComponent as Poly } from "../../../image/Poly.svg.svg";
import { ReactComponent as Plus } from "../../../image/Plus.svg";
import { toastify } from "../../../custom/toastify";

const PriceTitle = (props) => {
  const { stockName } = props;

  const { data, isLoading, isError } =
    useDetailArticleGet.useGetDetailStock(stockName);
  if (isError) {
    toastify.error("주가 상세정보를 불러오지 못했습니다");
  }
  return (
    <Name>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <P>{stockName}</P>
          <TitleBox>
            <NameP>{data?.stockPrice}</NameP>
            <TitleDiv>
              <Poly />
              <TitleP>{data?.change}</TitleP>
            </TitleDiv>
            <TitleDiv>
              <Plus width="9" height="9" fill="#FF3232" />
              <TitleP>{data?.changeRate}</TitleP>
            </TitleDiv>
          </TitleBox>
          <Box1>
            <Box1Div>
              전일
              <Box1P>{data?.lastPrice}</Box1P>
            </Box1Div>
            <Box1Div>
              고가
              <Box1P>{data?.highPrice}</Box1P>
            </Box1Div>
            <Box1Div>
              거래량
              <Box1P>{data?.tradeVolume}</Box1P>
            </Box1Div>
          </Box1>
          <Box1>
            <Box2Div>
              시가
              <Box1P>{data?.startPrice}</Box1P>
            </Box2Div>
            <Box2Div>
              저가
              <Box1P>{data?.lowPrice}</Box1P>
            </Box2Div>
            <Box2Div>
              거래대금
              <Box1P>78,000</Box1P>
            </Box2Div>
          </Box1>
        </>
      )}
    </Name>
  );
};

const Name = styled.div`
  position: relative;
  padding: 24px 0;
  min-height: 100px;
  border-bottom: 1px solid var(--gray2);
  @media screen and (max-width: 1100px) {
    border-bottom: none;
    width: 528px;
  }
  @media screen and (max-width: 750px) {
    border-bottom: 1px solid var(--gray2);
    width: 100%;
  } ;
`;

const P = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const TitleBox = styled.div`
  display: flex;
  margin-top: 12px;
`;

const NameP = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--pink2);
`;

const TitleDiv = styled.div`
  gap: 4px;
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  margin: 0 8px;
`;

const TitleP = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--pink2);
`;

const Box1 = styled.div`
  display: flex;
`;

const Box1Div = styled.div`
  gap: 4px;
  display: flex;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Box1P = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-right: 32px;
`;

const Box2Div = styled.div`
  gap: 4px;
  display: flex;
  margin-top: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export default PriceTitle;
