import React from "react";
import styled from "styled-components";
import { useDetailArticleMutate } from "./useDetailArticle";
import { ReactComponent as UpSvg } from "../../image/Up.svg";
import { ReactComponent as DownSvg } from "../../image/Down.svg";

const Vote = (props) => {
  const { id, voteUp, voteDown } = props;
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
        추천 {voteUp}{" "}
      </Btn>
      <Btn1
        onClick={() => {
          const data = { postId: id };
          Negative(data);
        }}
      >
        {" "}
        반대 {voteDown}
      </Btn1>
    </BtnBox>
  );
};

const BtnBox = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 20px;
`;

const Btn = styled.button`
  padding: 10px;
  background: var(--green1);
  color: var(--white);
`;

const Btn1 = styled.button`
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--gray2);
  color: var(--gray3);
`;
export default Vote;
