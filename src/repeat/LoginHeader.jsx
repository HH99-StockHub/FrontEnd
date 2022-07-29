import React, { useEffect } from "react";
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
import { rank } from "../state/server/rank";

const LoginHeader = () => {
  // 등급 정보 받아오기
  const { data = { data: { rankTitle: "신입", expPoint: 0 } } } =
    useHeaderApi.useGetRank();
  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 500px)",
  });

  const isMostSmall = useMediaQuery({
    query: "(max-width : 420px)",
  });
  // 글작성 상태
  const setFormState = useSetRecoilState(addArticleState);
  const setRank = useSetRecoilState(rank);
  // 글작성
  const openAddArticle = () => {
    setFormState(true);
  };

  useEffect(() => {
    if (data.data?.rankTitle) {
      setRank(data.data?.rankTitle);
    }
  }, [data.data]);

  return (
    <WrapMenu>
      <WrapProfile state={data.data.rankTitle}>
        <ProfileImg
          size="size2"
          rank={data.data?.rankTitle}
          src={localStorage.getItem("profileImg")}
        />
        <MyDrupDown data={data.data} />
        {!isMostSmall && <span>{data.data?.rankTitle}</span>}
      </WrapProfile>
      {!isSmall && <Writing onClick={openAddArticle}>글쓰기</Writing>}

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
  margin-left: 10px;
  > span {
    font-size: 12px;
    font-weight: 700;
    color: ${({ state }) => {
      switch (state) {
        case "신입":
          return "var(--green1)";
        case "초보":
          return "var(--green2)";
        case "중수":
          return "var(--blue1)";
        case "고수":
          return "var(--blue2)";
        case "지존":
          return "var(--pink2)";
        default:
          return "var(--pink2)";
      }
    }};
  }
`;

const Writing = styled.button`
  width: 54px;
  background-color: #3cc472;
  color: var(--white);
`;
