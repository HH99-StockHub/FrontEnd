import React, { useEffect, useState } from "react";
import styled from "styled-components";
// query 훅
import { useDetailArticleMutate } from "./useDetailArticle";
//이미지
import { ReactComponent as XbtnSvg } from "../../image/XBtn.svg";
const CommentCard = ({ data }) => {
  const [deleteBtn, setDeleteBtn] = useState(false);

  const { mutate } = useDetailArticleMutate.useDeleteComment();
  //댓글 삭제
  const deleteComment = (commentId) => {
    mutate(commentId);
  };
  useEffect(() => {
    const currentUserId = localStorage.getItem("profileImg");
    if (currentUserId === data.profileImage) {
      setDeleteBtn(true);
    }
  }, []);
  return (
    <WrapCard>
      <WrapContent>
        <p>{data.nickname}</p>
        <pre>{data.comments}</pre>
        <span>{data.createdAt}</span>
      </WrapContent>
      <BoxNo>
        {deleteBtn && (
          <button
            onClick={() => {
              deleteComment(data.commentId);
            }}
          >
            <XbtnSvg width="6.59" height="6.59" />
          </button>
        )}
      </BoxNo>
    </WrapCard>
  );
};

export default CommentCard;

const WrapCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
`;

const WrapContent = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 9px;
    color: #ccc;
    width: 100px;
  }
  pre {
    width: 100%;
    font-size: 12px;
  }
  span {
    font-size: 12px;
  }
`;

const BoxNo = styled.div`
  width: 33px;
  > button {
    width: 30px;
  }
`;
