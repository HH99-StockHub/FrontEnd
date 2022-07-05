import React from "react";
import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

const currentUserId = localStorage.getItem("id");
//찬성투표
const useVoteInFavor = (payload) => {
  return api.post(`/articles/${payload.articleId}/up`, {
    voteUpId: payload.voteUpId,
  });
};
//반대투표
const useNegativeVote = (payload) => {
  return api.post(`/articles/${payload.articleId}/down`, {
    voteDownId: payload.voteDownId,
  });
};

const Vote = () => {
  const queryClient = useQueryClient();
  //찬성투표
  const VoteInFavor = useMutation(useVoteInFavor, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const InFavor = ({ articleId }) => {
    VoteInFavor.mutate({ articleId , voteUpId:currentUserId });
  };
  //반대투표
  const NegativeVote = useMutation(useNegativeVote, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const Negative = ({ articleId }) => {
    NegativeVote.mutate({ articleId , voteDownId:currentUserId } );
  };

  if (Vote.isLoading) {
    return null;
  }

  return (
    <BtnBox>
      <Btn onClick={InFavor}>  추천 </Btn>
      <Btn onClick={Negative}> 반대 </Btn>
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
  background: #D9D9D9;
`
export default Vote;
