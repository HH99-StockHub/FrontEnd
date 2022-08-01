import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useChangeNum from "../../../custom/changeNum";
import ProfileImg from "../../../elem/ProfileImg";

const Writing = (props) => {
  const {
    view,
    stockName,
    articleTitle,
    profileImage,
    nickName,
    userId,
    rank,
    richList = false,
    popularList = false,
  } = props;
  const changeNum = useChangeNum;
  return (
    <>
      <Box>
        <StockName>{stockName}</StockName>
        <div>
          <Sam>
            <P1>
              <P2>{articleTitle}</P2>
              <div>
                {richList ? <Badge color="var(--blue1)">수익왕</Badge> : null}
                {popularList ? (
                  <Badge color="var(--blue2)">인기글</Badge>
                ) : null}
              </div>
            </P1>
          </Sam>
          <Div>
            <P3>
              <ProfileImg size="size3" rank={rank} src={profileImage} />
              <Link to={`/search/article/${nickName}/${userId}/1`}>
                {nickName}
              </Link>
            </P3>
            <P>조회 {changeNum(view)}</P>
          </Div>
        </div>
      </Box>
    </>
  );
};
export default Writing;

const Box = styled.div`
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid var(--gray2);
  > div {
    display: flex;
    justify-content: space-between;
    gap: 22px;
    margin-top: 8px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 22px;
    }
  }
`;

const Sam = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 10px;
  margin-bottom: 8px;
`;

const StockName = styled.p`
  word-break: break-all;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 22px;
  min-width: 200px;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }
`;

const P = styled.p`
  width: 100px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  @media screen and (max-width: 800px) {
    width: 150px;
    line-height: 20px;
  }
`;

const P1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 4px;
  }
`;

const P2 = styled.p`
  font-weight: 700;
  width: 100%;
  font-size: 22px;
  line-height: 26px;
  word-break: break-all;
`;

const P3 = styled.div`
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  > a {
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Badge = styled.p`
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  color: var(--white);
`;
