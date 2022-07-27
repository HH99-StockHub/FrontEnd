import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useSetRecoilState } from "recoil";
// 컴포넌트
import ProfileImg from "../elem/ProfileImg";
import MyDrupDown from "../components/HeaderDrupDown/MyDrupDown";
import AlarmDrupDown from "../components/HeaderDrupDown/AlarmDrupDown";
//훅
import { useHeaderApi } from "./useRepeatQuery";
// 모듈
import { addArticleState } from "../state/client/modal";

const LoginHeader = () => {
  // 등급 정보 받아오기
  const { data } = useHeaderApi.useGetRank();
  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 370px)",
  });
  // 글작성 상태
  const setFormState = useSetRecoilState(addArticleState);
  // 글작성
  const openAddArticle = () => {
    setFormState(true);
  };
  return (
    <WrapMenu>
      <WrapProfile>
        <ProfileImg
          size="size2"
          rank={data.rank}
          src={localStorage.getItem("profileImg")}
        />
        <MyDrupDown data={data} />
        <span>{data.rank}</span>
      </WrapProfile>
      {!isSmall && <Writing onClick={openAddArticle}>글작성</Writing>}

      <AlarmDrupDown />
    </WrapMenu>
  );
};

export default LoginHeader;

const WrapMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 35px;
  button {
    height: 100%;
    font-size: 12px;
    font-weight: 400px;
  }
`;

const WrapProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  > span {
    font-size: 12px;
    font-weight: 700;
    color: var(--green1);
  }
`;

const Writing = styled.button`
  width: 54px;
  background-color: #3cc472;
  color: var(--white);
`;
