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

const Vote = (props) => {
  const { id, voteUp, voteDown } = props;
  //찬성투표
  const { mutate: InFavor } = useDetailArticleMutate.useVoteUpMutation();

  //반대투표
  const { mutate: Negative } = useDetailArticleMutate.useVoteDownMutation();

  if (Vote.isLoading) {
    return null;
  }

  return (
    <BtnBox>
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
