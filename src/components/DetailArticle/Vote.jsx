import React from "react";
import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

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
  //반대투표
  const NegativeVote = useMutation(useNegativeVote, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return <div></div>;
};

export default Vote;
