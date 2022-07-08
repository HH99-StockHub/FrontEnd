import React from "react";
import styled from "styled-components";
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";
import { ReactComponent as Vector } from "../../image/Vector.svg";
import { ReactComponent as Stock } from "../../image/UpStock.svg";
import { useNavigate } from 'react-router-dom';

const TotalArticleList = ({ data }) => {

  const navigate = useNavigate()
  
  return (
    <>
      <WrapTd>
        <Content>
          {data.map((data) => {
            return (
              <Box key={data.articleId} onClick={()=>{
                navigate(`/detail/article/${data.articleId}`)
              }}>
                <P>{data.stockName}</P>
                <P1>{data.articleTitle}</P1>
                <Random>
                  <Random>
                    <UpSvg width="12.83" height="11.67" top="0.58" left="0.58" fill="#B1B1B1" />
                    <P2>{data.voteUpCount}</P2>
                  </Random>
                  <Random>
                    <DownSvg width="12.83" height="11.67" top="0.58" left="0.58" fill="#B1B1B1" />
                    <P2>{data.voteDownCount}</P2>
                  </Random>
                  <Random>
                    <Stock width="12.83" height="11.67" top="0.58" left="0.58" fill="#B1B1B1" />
                    <P2>{data.stockReturn}%</P2>
                  </Random>
                  <Random>
                    <Vector width="12.83" height="11.67" top="0.58" left="0.58" fill="#B1B1B1"/>
                    <P2>{data.viewCount}</P2>
                  </Random>
                </Random>
                <Just>
                  <Random>
                    <Img>
                      <Img1 src={data.profileImage} alt="프로필" />
                    </Img>
                    <P3>{data.nickname}</P3>
                  </Random>
                  <P4>{data.createdAt}</P4>
                </Just>
              </Box>
            );
          })}
        </Content>
      </WrapTd>
    </>
  );
};

export default TotalArticleList;

const WrapTd = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0 8px 8px;
  font-size: 12px;
`;

const Box = styled.div`
padding: 32px 26px;
  width: 404px;
  height: 171px;
  background: #ffffff;
  border: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-right: 6px;
`;

const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 20px 0;
  margin: 20px auto;
  width: 1240px;
  
`;

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b1b1b1;
`;

const P1 = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 14px;
  margin-top: 3px;
`;

const P2 = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #929292;
  margin-left:5px;
  margin-right: 5px;
  margin-top: -3px;
  `;

const P3 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const P4 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #e0e0e0;
`;
const Random = styled.div`
  display: flex;
`;

const Just = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 15px;
`;

const Img = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const Img1 = styled.img`
  width: 100%;
`;
