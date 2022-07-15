import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import dayjs from "dayjs";
//컴포넌트
import LineChart from "../../Chart/LineChart";
import { useDetailArticleGet } from "../useDetailArticle";

//모듈
import { chartToggleState } from "../../../redux/modules/toggleState";

//이미지
import { ReactComponent as Poly } from "../../../image/Poly.svg.svg";
import { ReactComponent as Plus } from "../../../image/Plus.svg";

const Title = (props) => {
  const { stockName } = props;
  const dispatch = useDispatch();
  const { data = [], refetch } = useDetailArticleGet.useNewsSearch(stockName);

  return (
    <>
      <Box>
        <NameDiv>
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
          <MarketDiv>
            <MarketB>
              <MarkeTT>일일 그래프</MarkeTT>
              <MarketGp
                onClick={() => {
                  dispatch(chartToggleState(true));
                }}
              >
                그래프 보기
              </MarketGp>
            </MarketB>
            <Market>
              <LineChart />
            </Market>
          </MarketDiv>
        </NameDiv>
        <NewsBox>
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
        </NewsBox>
      </Box>
    </>
  );
};

const TitleBox = styled.div`
  display: flex;
  margin-top: 12px;
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
  color: #ff3232;
`;

const NameP = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ff3232;
`;

const Box1P = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-right: 32px;
`;

const Box1Div = styled.div`
  gap: 4px;
  display: flex;
  margin-top: 24px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const Box2Div = styled.div`
  gap: 4px;
  display: flex;
  margin-top: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const MarketB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MarketGp = styled.button`
  background: #54ba7d;
  padding: 10px;
  gap: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;

const MarkeTT = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
`;

const Newsb = styled.pre`
  padding: 12px 0px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

const MarketDiv = styled.div`
  padding: 24px 0px;
`;

const NameDiv = styled.div`
  /* height: 448px; */
  border: 1px solid #e0e0e0;
  padding: 0px 24px;
`;

const NewsBox = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  margin-top: 24px;
  padding: 24px 24px;
`;

const NewsTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const News = styled.div`
  width: 100%;
  color: #000000;
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
  color: #b1b1b1;
`;

const P = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`;

const Box = styled.div`
  position: absolute;
  right: -1%;
  width: 403px;
`;

const Box1 = styled.div`
  display: flex;
`;

const Name = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 24px 0;
`;
const Market = styled.div`
  border: 1px solid #b1b1b1;
  height: 200px;
  margin-top: 12px;
`;

export default Title;

//간격은
