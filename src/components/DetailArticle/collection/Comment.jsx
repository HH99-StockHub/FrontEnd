import React from "react";
import styled from "styled-components";
import { useQueryClient } from "react-query";
// 컴포넌트
import {
  useDetailArticleGet,
  useDetailArticleMutate,
} from "../useDetailArticle";

// 컴포넌트
import CommentCard from "../CommentCard";

const Comment = ({ id }) => {
  const queryClient = useQueryClient();
  const writeInput = React.useRef("");
  const { mutate, isSuccess } = useDetailArticleMutate.useWriteComment({
    onSuccess: (data) => {
      if (data) {
        writeInput.current.value = "";
        queryClient.invalidateQueries();
        alert("댓글 작성 완료");
      } else {
        alert("비속어 금지");
      }
    },
    onError: (data, error, variables, context) => {
      if (data.response.state === 400) {
        alert("댓글 내용은 300자 이내로 작성해 주세요.");
      }
    },
  });

  // 댓글 가져오기
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useDetailArticleGet.useCommentInquiry(id);
  if (isLoading) return <div>불러오는 중입니다.</div>;
  if (isError) alert("댓글 불러오기를 실패했습니다.");

  const addComment = (e) => {
    e.preventDefault();
    if (writeInput.current.value !== "") {
      const data = { write: writeInput.current.value, id: id };
      mutate(data);
    } else {
      alert("공백없이 작성해주세요");
    }
  };

  return (
    <Box>
      <h3>댓글달기</h3>
      <Label onSubmit={addComment}>
        <Views ref={writeInput} placeholder="상세내용 작성"></Views>
        <Btn type="sumbit">보내기</Btn>
      </Label>
      {data.map((v) => {
        return <CommentCard data={v} key={v.commentId} />;
      })}
    </Box>
  );
};

const Box = styled.div`
  margin-top: 20px;
  padding: 20px 0px;
`;

const Label = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dbdbdb;
  width: 100%;
  margin-top: 20px;
`;

const Btn = styled.button`
  background: #dedede;
  padding: 10px;
  margin-right: 10px;
`;

const Views = styled.input`
  flex: 8;
  padding: 20px;
  color: #000000;
  font-weight: 700;
  border: 0;
  outline: none;
`;
export default Comment;
