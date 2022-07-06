import React from "react";
import styled from "styled-components";
import { useCommentInquiry } from "../../../custom/reactQuery/useQuery";
import { useDetailArticleMutate } from "../useDetailArticle";

// 컴포넌트
import CommentCard from "../CommentCard";

const Comment = () => {
  const WriteInput = React.useRef("");
  const { mutate } = useDetailArticleMutate.useWriteComment();
  // 잉여 arr
  const data = [1, 23, 2, 4, 5];

  // 댓글 가져오기
  // const { data, isLoading, isError, error } = useCommentInquiry("id");
  // if (isLoading) return <div>불러오는 중입니다.</div>;
  // if (isError) alert("댓글 불러오기를 실패했습니다.");
  return (
    <Box>
      <h3>댓글달기</h3>
      <Label>
        <Views ref={WriteInput} placeholder="상세내용 작성"></Views>
        <Btn onClick={()=>{
          const data = { Write: WriteInput.current.value };
          mutate(data)
        }}>보내기</Btn>
      </Label>
      {data.map((v) => {
        return <CommentCard data={v} />;
      })}
    </Box>
  );
};

const Box = styled.div`
  margin-top: 20px;
  padding: 20px 0px;
`;

const Label = styled.label`
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
