import React from 'react'
import { api } from "../../shared/api";
import { useQuery, useMutation, useQueryClient } from "react-query";

//찬성투표
const useVoteInFavor = ({ articleId }) => {
    return api.post(`/articles/${articleId}/up`);
  };
  //반대투표
  const useNegativeVote = ({ articleId }) => {
    return api.post(`/articles/${articleId}/down`);
  };

const Vote = () => {
    const queryClient = useQueryClient();
    //찬성투표
    const VoteInFavor = useMutation(useVoteInFavor,{
      onSuccess: () => {
          queryClient.invalidateQueries()
      }
    });
    //반대투표
    const NegativeVote = useMutation(useNegativeVote,{
      onSuccess: () => {
          queryClient.invalidateQueries()
      }
    });

  return (
    <div>
      
    </div>
  )
}

export default Vote
