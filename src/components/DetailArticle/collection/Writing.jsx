import React from "react";
import styled from "styled-components";
import View from "./View";

const Writing = (props) => {
  const { view, stockName, articleTitle, profileImage, nickName } = props;
  return (
    <>
      <Box>
        <Sam>
          <P1>
            <div>{stockName}</div>
            <P3>
              <Img>
                <Img1 src={profileImage} />
              </Img>
              {nickName}
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
  border-bottom: 1px solid #e0e0e0;
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
  color: #000000;
`;

const Img1 = styled.img`
  width: 100%;
`;

const Img = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;

export default Writing;
