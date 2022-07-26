import React from "react";
import styled from "styled-components";

//이미지
import { ReactComponent as Poly } from "../../../image/Poly.svg.svg";
import { ReactComponent as Plus } from "../../../image/Plus.svg";

const PriceTitle = (props) => {
  const { stockName } = props;

  return (
    <Name>
      <P>{stockName}</P>
      <TitleBox>
        <NameP>8,400</NameP>
        <TitleDiv>
          <Poly />
          <TitleP>7,000</TitleP>
        </TitleDiv>
        <TitleDiv>
          <Plus width="9" height="9" fill="#FF3232" />
          <TitleP>10%</TitleP>
        </TitleDiv>
      </TitleBox>
      <Box1>
        <Box1Div>
          전일
          <Box1P>78,000</Box1P>
        </Box1Div>
        <Box1Div>
          고가
          <Box1P>78,000</Box1P>
        </Box1Div>
        <Box1Div>
          거래량
          <Box1P>78,000(161%)</Box1P>
        </Box1Div>
      </Box1>
      <Box1>
        <Box2Div>
          시가
          <Box1P>78,000</Box1P>
        </Box2Div>
        <Box2Div>
          저가
          <Box1P>78,000</Box1P>
        </Box2Div>
        <Box2Div>
          거래대금
          <Box1P>78,000</Box1P>
        </Box2Div>
      </Box1>
    </Name>
  );
};

const Name = styled.div`
  border-bottom: 1px solid var(--gray2);
  padding: 24px 0;
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
