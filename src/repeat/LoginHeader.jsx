import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useSetRecoilState } from "recoil";
import ProfileImg from "../elem/ProfileImg";
import MyDrupDown from "../components/HeaderDrupDown/MyDropDown/MyDrupDown";
import AlarmDrupDown from "../components/HeaderDrupDown/AlarmDrupDown";
import { useHeaderApi } from "./useRepeatQuery";
import { addArticleState } from "../state/client/modal";
import { rank } from "../state/server/rank";
import { ReactComponent as DownArrowSvg } from "../image/DownArrow.svg";

const LoginHeader = () => {
  // 등급 정보 받아오기
  const { data = { data: { rankTitle: "신입", expPoint: 0 } } } =
    useHeaderApi.useGetRank();
  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 520px)",
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
      <WrapProfile>
        <ProfileImg
          size="size2"
          rank={data.data?.rankTitle}
          src={localStorage.getItem("profileImg")}
        />
        <MyDrupDown data={data.data} />
        <DownArrowSvg />
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
`;

const Writing = styled.button`
  width: 54px;
  background-color: #3cc472;
  color: var(--white);
`;
