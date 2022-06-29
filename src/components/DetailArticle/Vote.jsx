import React from "react";
import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";

//찬성투표
const useVoteInFavor = ({ articleId }, payload) => {
  return api.post(`/articles/${articleId}/up`, {
    articleId: payload.articleId,
  });
};
//반대투표
const useNegativeVote = ({ articleId }, payload) => {
  return api.post(`/articles/${articleId}/down`, {
    articleId: payload.articleId,
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

  const InFavor = ({articleId}) => {
    VoteInFavor.mutate({articleId})
  }
  //반대투표
  const NegativeVote = useMutation(useNegativeVote, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const Negative = ({articleId}) => {
    NegativeVote.mutate({articleId})
  }

  if(Vote.isLoading){
    return null;
  }
  
  return (
    <div>
      <button onClick={InFavor}> 좋아요 </button>
      <button onClick={Negative}> 싫어요 </button>
    </div>
  );
};


export default Vote;
