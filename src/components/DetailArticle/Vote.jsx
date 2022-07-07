import React from "react";
import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
<<<<<<< HEAD

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

const Vote = (props) => {
  const { id, voteUp, voteDown } = props;
  //찬성투표
  const { mutate: InFavor } = useDetailArticleMutate.useVoteUpMutation();

  //반대투표
  const { mutate: Negative } = useDetailArticleMutate.useVoteDownMutation();

  if (Vote.isLoading) {
    return null;
  }
=======

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
>>>>>>> main

  if (Vote.isLoading) {
    return null;
  }

  return (
    <BtnBox>
<<<<<<< HEAD
      <Btn
        onClick={() => {
          const data = { postId: id };
          InFavor(data);
        }}
      >
        {" "}
        <UpSvg width="11" height="10" /> 추천 {voteUp}{" "}
      </Btn>
      <Btn
        onClick={() => {
          const data = { postId: id };
          Negative(data);
        }}
      >
        {" "}
        <DownSvg width="11" height="10" />
        반대 {voteDown}
      </Btn>
=======
      <Btn onClick={InFavor}>  추천 </Btn>
      <Btn onClick={Negative}> 반대 </Btn>
>>>>>>> main
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
