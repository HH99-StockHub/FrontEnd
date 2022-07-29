import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  } = props;
  return (
    <>
      <Box>
        <Sam>
          <P1>
            <StockName>{stockName}</StockName>
            <P3>
              <ProfileImg size="size3" rank={rank} src={profileImage} />
              <Link to={`/search/article/${nickName}/${userId}/1`}>
                {nickName}
              </Link>
            </P3>
          </P1>
        </Sam>
        <Div>
          <P2>{articleTitle}</P2>
          <P>조회 {123444}</P>
        </Div>
      </Box>
    </>
  );
};

const Box = styled.div`
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid var(--gray2);
`;

const Sam = styled.div`
  display: flex;
  font-size: 16px;
  gap: 10px;
  margin-bottom: 8px;
`;

const StockName = styled.p`
  word-break: break-all;
`;

const Div = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-end;
`;

const P = styled.p`
  width: 100px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  border: 1px solid #000;
  @media screen and (max-width: 800px) {
    width: 150px;
    line-height: 20px;
  }
`;

const P1 = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  word-break: break-all;
  border: 1px solid #000;
`;

const P3 = styled.div`
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: var(--black);
`;

export default Writing;
