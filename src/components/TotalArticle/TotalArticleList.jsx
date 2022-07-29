import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

import useSliceNum from "../../custom/sliceNum";
// elem
import ProfileImg from "../../elem/ProfileImg";
// 이미지
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";
import { ReactComponent as Vector } from "../../image/Vector.svg";
import { ReactComponent as Stock } from "../../image/UpStock.svg";
// const TotalArticleList = ({ data }) => {
const TotalArticleList = ({ data }) => {
  // onclick navigate 이벤트 버블링이 있어 하위 요소에 옵션으로 막아둠
  const navigate = useNavigate();
  const sliceNum = useSliceNum;

  return (
    <>
      <Content>
        {data.map((data) => {
          return (
            <Box
              key={data.articleId}
              onClick={(e) => {
                navigate(`/detail/article/${data.articleId}`);
              }}
            >
              <WrapBadge>
                <P>{data.stockName}</P>
                <div>
                  {data.richList ? (
                    <Badge color="var(--blue1)">수익왕</Badge>
                  ) : null}
                  {data.popularList ? (
                    <Badge color="var(--blue2)">인기글</Badge>
                  ) : null}
                </div>
              </WrapBadge>
              <P1>{data.articleTitle}</P1>
              <WrapRandom>
                <Random>
                  <UpSvg
                    width="12.83"
                    height="11.67"
                    top="0.58"
                    left="0.58"
                    fill="#B1B1B1"
                  />
                  <P2>{data.voteUpCount}</P2>
                </Random>
                <Random>
                  <DownSvg
                    width="12.83"
                    height="11.67"
                    top="0.58"
                    left="0.58"
                    fill="#B1B1B1"
                  />
                  <P2>{data.voteDownCount}</P2>
                </Random>
                <Random>
                  <Stock
                    width="12.83"
                    height="11.67"
                    top="0.58"
                    left="0.58"
                    fill="#B1B1B1"
                  />
                  <P2>{sliceNum(data.stockReturn)}%</P2>
                </Random>
                <Random>
                  <Vector
                    width="12.83"
                    height="11.67"
                    top="0.58"
                    left="0.58"
                    fill="#B1B1B1"
                  />
                  <P2>{data.viewCount}</P2>
                </Random>
              </WrapRandom>
              <Just>
                <WrapBottom>
                  <div>
                    <ProfileImg
                      size="size3"
                      rank={data.rankTitle}
                      src={data.profileImage}
                    />
                    <P3
                      id="userNickname"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(
                          `/search/article/${data.nickname}/${data.userId}/1`,
                        );
                      }}
                    >
                      {data.nickname}
                    </P3>
                  </div>
                </WrapBottom>
                <P4>{dayjs(data.createdAt).format("YY.MM.DD")}</P4>
              </Just>
            </Box>
          );
        })}
      </Content>
    </>
  );
};

export default TotalArticleList;

const Content = styled.div`
  margin-top: 20px;
  min-height: 100px;
  width: 100%;
  display: grid;
  grid-gap: 14px 14px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  padding: 32px 26px;
  background: var(--white);
  border: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 0;
  cursor: pointer;
`;

const WrapBadge = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    gap: 4px;
  }
`;

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--gray3);
`;

const P1 = styled.p`
  display: -webkit-box;
  margin-bottom: 14px;
  margin-top: 6px;
  margin-bottom: 14px;
  color: var(--black);
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  max-width: 350px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 1200px) {
    max-width: 450px;
  }
  @media screen and (max-width: 760px) {
    max-width: 600px;
  }
`;

const P2 = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #929292;
`;

const P3 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: var(--black);
  display: -webkit-box;
  white-space: normal;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const P4 = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: var(--gray3);
`;
const Random = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const WrapRandom = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Just = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const WrapBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  > div {
    display: flex;
    gap: 4px;
  }
`;

const Badge = styled.p`
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  color: var(--white);
`;
