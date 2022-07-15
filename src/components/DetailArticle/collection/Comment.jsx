import React from "react";
import styled from "styled-components";
import { useQueryClient } from "react-query";
// 컴포넌트
import CommentCard from "../CommentCard";
// 훅
import { toastify } from "../../../custom/toastify";
import {
  useDetailArticleGet,
  useDetailArticleMutate,
} from "../useDetailArticle";

const Comment = ({ id }) => {
  const queryClient = useQueryClient();
  const writeInput = React.useRef("");
  const { mutate, isSuccess } = useDetailArticleMutate.useWriteComment({
    onSuccess: (data) => {
      if (data) {
        writeInput.current.value = "";
        queryClient.invalidateQueries();
        toastify.success("댓글 작성 완료");
      } else {
        toastify.error("비속어 금지");
      }
    },
    onError: (data, error, variables, context) => {
      if (data.response.state === 400) {
        toastify.error("댓글 내용은 300자 이내로 작성해 주세요.");
      }
    },
  });
  console.log(id, "댓글 카드");
  // 댓글 가져오기
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useDetailArticleGet.useCommentInquiry(id);
  if (isLoading) return <div>불러오는 중입니다.</div>;
  if (isError) toastify.error("댓글 불러오기를 실패했습니다.");
  console.log(data);

  const addComment = (e) => {
    e.preventDefault();
    if (writeInput.current.value !== "") {
      const data = { write: writeInput.current.value, id: id };
      mutate(data);
    } else {
      if (isError) toastify.error("공백없이 작성해주세요");
    }
  };

  return (
    <Box>
      <H3>댓글달기</H3>
      <Label onSubmit={addComment}>
        <Views ref={writeInput} placeholder="댓글을 작성해주세요."></Views>
        <Btn type="sumbit">등록하기</Btn>
      </Label>
      {data.map((v) => {
        return <CommentCard data={v} key={v.commentId} />;
      })}
    </Box>
  );
};

const Box = styled.div`
  margin-top: 20px;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const Label = styled.form`
  display: flex;
  justify-content: space-between;
  border: 1px solid #dbdbdb;
  width: 100%;
  margin-top: 20px;
  height: 89px;
`;

const Btn = styled.button`
  background: #54ba7d;
  margin-right: 10px;
  padding: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  height: 34px;
  color: #ffffff;
  align-self: flex-end;
  margin-bottom: 10px;
`;

const Views = styled.textarea`
  color: #000000;
  flex: 8;
  font-weight: 700;
  border: 0;
  padding: 10px;
  height: 100%;
  outline: none;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
  ::placeholder {
    color: #b1b1b1;
  }
`;
export default Comment;
