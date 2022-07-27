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
const TotalArticleList = ({}) => {
  // onclick navigate 이벤트 버블링이 있어 하위 요소에 옵션으로 막아둠
  const navigate = useNavigate();
  const sliceNum = useSliceNum;

  const data = [
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "박태형",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 400,
      voteUpCount: 400,
      voteDownCount: 400,
      commentCount: 400,
      viewCount: 400,
      popularList: true,
      richList: false,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 400,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
    {
      articleId: 1,
      createdAt: "LocalDateTime",
      userId: 1,
      nickname: "String",
      profileImage: "String",
      articleTitle: "String",
      stockName: "String",
      stockReturn: 0,
      voteUpCount: 0,
      voteDownCount: 0,
      commentCount: 0,
      viewCount: 0,
    },
  ];

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
              <P>{data.stockName}</P>
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
                      rank={data.rank}
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
                  <div>
                    {data.richList ? (
                      <Badge color="var(--blue1)">수익왕</Badge>
                    ) : null}
                    {data.popularList ? (
                      <Badge color="var(--blue2)">인기글</Badge>
                    ) : null}
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

const P = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--gray3);
`;

const P1 = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 14px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 6px;
  margin-bottom: 14px;
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
