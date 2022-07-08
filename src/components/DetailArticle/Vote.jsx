import React from "react";
import styled from "styled-components";
import { useDetailArticleMutate } from "./useDetailArticle";
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";

const Vote = (props) => {
  const { id,voteUp,voteDown } = props;
  //찬성투표
  const { mutate: InFavor } = useDetailArticleMutate.useVoteUpMutation();

  //반대투표
  const { mutate: Negative } = useDetailArticleMutate.useVoteDownMutation();

  return (
    <BtnBox>
      <Btn
        onClick={() => {
          const data = { postId: id };
          InFavor(data);
        }}
      >
        {" "}
        <UpSvg width="11" height="10"  fill="black"/> 추천 {voteUp}{" "}
      </Btn>
      <Btn
        onClick={() => {
          const data = { postId: id };
          Negative(data);
        }}
      >
        {" "}
        <DownSvg width="11" height="10" fill="black" />
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
