import React, { useEffect, useState } from "react";
import styled from "styled-components";
// query 훅
import { useDetailArticleMutate } from "./useDetailArticle";

const CommentCard = ({ data }) => {
  const [circle, setCircle] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);
  // 댓글 hover시 자신의 댓글에 메뉴 보이기 / 숨기기
  const [show, setShow] = useState(false);

  const { mutate } = useDetailArticleMutate.useDeleteComment();
  //댓글 삭제
  const deleteComment = (commentId) => {
    mutate(commentId);
  };
  useEffect(() => {
    const currentUserId = localStorage.getItem("profileImg");
    if (currentUserId === data.profileImage) {
      setDeleteBtn(true);
      setCircle(false);
    }
  }, []);
  return (
    <WrapCard
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
        setCircle(false);
      }}
    >
      <WrapContent>
        <P3>
          <P3div>
            <Img src={data.profileImage} alt="프로필" />
            <P3p>{data.nickname}</P3p>
          </P3div>
          <P3pre>{data.comments}</P3pre>
        </P3>
        <CircleDivBox>
          {show && deleteBtn && (
            <CircleDiv
              onClick={() => {
                setCircle(!circle);
              }}
            >
              <Circle />
              <Circle />
              <Circle />
            </CircleDiv>
          )}
          {circle ? (
            <DeleteBt
              onClick={() => {
                deleteComment(data.commentId);
              }}
            >
              삭제하기
            </DeleteBt>
          ) : null}
        </CircleDivBox>
      </WrapContent>
    </WrapCard>
  );
};

export default CommentCard;
const CircleDivBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const CircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 20px;
  height: 20px;
`;

const DeleteBt = styled.button`
  position: absolute;
  top: 0;
  left: 20px;
  width: 100px;
  border: 1px solid var(--gray2);
  font-weight: 500;
  font-size: 12px;
  padding: 10px;
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  left: 10px;
  top: 1px;
  border-radius: 100%;
  background: #d9d9d9;
`;

const WrapCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 24px;
  border-bottom: 1px solid var(--gray2);
  &:hover {
    background: #f7f7f7;
  }
`;

const WrapContent = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
`;

const P3p = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const P3div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const P3pre = styled.pre`
  margin-top: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  order: 1;
  flex-grow: 0;
`;

const P3 = styled.div`
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  color: var(--black);
`;

const Img = styled.img`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
