import React from "react";
import styled from "styled-components";
import {
  useDetailArticleGet,
  useDetailArticleMutate,
} from "./useDetailArticle";
import { getCookie } from "../../shared/Cookie";
import { toastify } from "../../custom/toastify";

const Vote = (props) => {
  const token = getCookie("token");
  const { id, voteUp, voteDown } = props;
  //찬성투표
  const { mutate: InFavor } = useDetailArticleMutate.useVoteUpMutation(id);

  //반대투표
  const { mutate: Negative } = useDetailArticleMutate.useVoteDownMutation(id);

  // 투표 상태 확인
  const { data = { data: 0 } } = useDetailArticleGet.useGetVoteSign(id);
  console.log(data, "투표확인");

  return (
    <BtnBox>
      <Btn
        state={data.data}
        onClick={() => {
          const data = { postId: id };
          if (token === undefined) {
            toastify.error("로그인 후 투표할 수 있습니다");
          } else {
            InFavor(data);
          }
        }}
      >
        추천 {voteUp}
      </Btn>
      <Btn1
        state={data.data}
        onClick={() => {
          const data = { postId: id };
          if (token === undefined) {
            toastify.error("로그인 후 투표할 수 있습니다");
          } else {
            Negative(data);
          }
        }}
      >
        비추천 {voteDown}
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
  ${({ state }) => {
    return state === 1 ? "border: 3px solid var(--green2)" : null;
  }}
`;

const Btn1 = styled.button`
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--gray2);
  color: var(--gray3);
  ${({ state }) => {
    return state === -1 ? "border: 3px solid var(--gray2)" : null;
  }}
`;
export default Vote;
