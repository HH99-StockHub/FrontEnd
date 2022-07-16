import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
//컴포넌트
import LoadingSpinner from "../../repeat/LoadingSpinner";

import useSliceNum from "../../custom/sliceNum";
// 이미지
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";
import { ReactComponent as Vector } from "../../image/Vector.svg";
import { ReactComponent as Stock } from "../../image/UpStock.svg";
const TotalArticleList = ({ data, isLoading }) => {
  // onclick navigate 이벤트 버블링이 있어 하위 요소에 옵션으로 막아둠
  const navigate = useNavigate();
  const sliceNum = useSliceNum;
  return (
    <>
      <Content>
        {isLoading && <LoadingSpinner />}
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
              <Random>
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
              </Random>
              <Just>
                <Random>
                  <Img src={data.profileImage} alt="프로필" />
                  <P3
                    id="userNickname"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(
                        `/search/article/${data.nickname}/${data.userId}`,
                      );
                    }}
                  >
                    {data.nickname}
                  </P3>
                </Random>
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

const Box = styled.div`
  padding: 32px 26px;
  width: 404px;
  background: var(--white);
  border: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 0;
  cursor: pointer;
`;

const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 20px;
  gap: 14px;
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
  width: 342px;
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
  color: var(--gray2);
`;
const Random = styled.div`
  display: flex;
  align-items: center;
  gap: 5.58px;
`;

const Just = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 15px;
`;

const Img = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
