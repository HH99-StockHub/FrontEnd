import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FramRichCard from "./FramRichCard";
import LoadingSpinner from "../../../repeat/LoadingSpinner";
import CardHeader from "./CardHeader";
import { useMainPageQuery } from "../useMainPageQuery";
import { toastify } from "../../../custom/toastify";

const FramRichArticle = () => {
  // useQuery
  const {
    data = [],
    isLoading,
    isError,
  } = useMainPageQuery.useGetFameRichArticle();
  if (isError) toastify.error("Best 수익왕 불러오기를 실패했습니다.");
  const arr = ["a", "b", "c"];

  return (
    <WrapRich>
      {isLoading && <LoadingSpinner />}
      {arr.map((v, l) => {
        return data[l] === undefined ? (
          <NoCard key={v}>
            게시글을 작성하고 <br /> 수익왕에 도전하세요
          </NoCard>
        ) : (
          <WrapCard key={data[l].articleId}>
            <CardHeader
              nickname={data[l].nickname}
              title={data[l].stockName}
              userId={data[l].userId}
            />
            <Link to={`/detail/article/${data[l].articleId}`}>
              <FramRichCard data={data[l]} index={l} />
            </Link>
          </WrapCard>
        );
      })}
    </WrapRich>
  );
};

export default FramRichArticle;
const WrapRich = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const WrapCard = styled.div`
  width: 100%;
`;

const NoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 28px;
  color: var(--gray3);
  font-size: 16px;
  font-weight: 700;
  background-color: var(--gray1);
  border: 1px solid var(--gray2);
  border-radius: 6px;
  min-height: 150px;
`;
