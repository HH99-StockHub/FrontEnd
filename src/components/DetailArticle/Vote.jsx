import React from "react";
import styled from "styled-components";
import { useDetailArticleMutate } from "./useDetailArticle";
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";

const Vote = () => {
  const currentUserId = localStorage.getItem("id");
  //찬성투표
  const VoteInFavor = useDetailArticleMutate.useVoteUpMutation();

  const InFavor = ({ articleId }) => {
    VoteInFavor.mutate({ articleId, voteUpId: currentUserId });
  };

  //반대투표
  const NegativeVote = useDetailArticleMutate.useVoteDownMutation();

  const Negative = ({ articleId }) => {
    NegativeVote.mutate({ articleId, voteDownId: currentUserId });
  };

  return (
    <BtnBox>
      <Btn onClick={InFavor}> <UpSvg width="11" height="10" /> 추천 10 </Btn>
      <Btn onClick={Negative}> <DownSvg width="11" height="10"/>반대 10</Btn>
    </BtnBox>
  );
};

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Btn = styled.button`
  padding: 10px 40px;
  background: #d9d9d9;
`;
export default Vote;
