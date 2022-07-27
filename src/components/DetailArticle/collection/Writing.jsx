import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileImg from "../../../elem/ProfileImg";

const Writing = (props) => {
  const { view, stockName, articleTitle, profileImage, nickName, userId } =
    props;
  return (
    <>
      <Box>
        <Sam>
          <P1>
            <div>{stockName}</div>
            <P3>
              <ProfileImg size="size3" src={profileImage} />
              <Link to={`/search/article/${nickName}/${userId}/1`}>
                {nickName}
              </Link>
            </P3>
          </P1>
        </Sam>
        <Div>
          <P2>{articleTitle}</P2>
          <P>조회 {view}</P>
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

const Div = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const P = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
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
