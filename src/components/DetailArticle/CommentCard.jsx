import React, { useEffect, useState } from "react";
import styled from "styled-components";
// query 훅
import { useDetailArticleMutate } from "./useDetailArticle";
//이미지
import { ReactComponent as XbtnSvg } from "../../image/XBtn.svg";
const CommentCard = ({ data }) => {
  const [circle , setCircle] =useState(false);
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
      setCircle(false)
    }
  }, []);
  return (
    <WrapCard>
      <WrapContent>
        <P3>
          <P3div>
            <Img>
              <Img1 src={data.profileImage} />
            </Img>
            <P3p>{data.nickname}</P3p>
          </P3div>
          <P3pre>{data.comments}</P3pre>
        </P3>
        <CircleDivBox>
          {deleteBtn &&  <CircleDiv onClick={()=>{
            setCircle(true)
          }}>
          <Circle/>
          <Circle/>
          <Circle/>
          </CircleDiv>}
          {circle ? (
          <DeleteBt
            onClick={() => {
              deleteComment(data.commentId);
            }}
          >
 삭제하기
          </DeleteBt>
        ): null}  
        </CircleDivBox>
      </WrapContent>
    </WrapCard>
  );
};

export default CommentCard;
const CircleDivBox =styled.div`
  display: flex;
  justify-content: flex-end;
`

const CircleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const DeleteBt =styled.button`
  border: 1px solid #E0E0E0;
  font-weight: 500;
font-size: 12px;
padding: 10px;
`

const Circle = styled.div`
  width: 4px;
height: 4px;
left: 10px;
top: 1px;
border-radius: 100%;
background: #D9D9D9;
`

const WrapCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-top: 24px;
  border-bottom: 1px solid #E0E0E0;
 &:hover {
  background: #F7F7F7;
}
`;

const WrapContent = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;


const P3p =styled.p`
  font-weight: 400;
font-size: 14px;
line-height: 17px;
`

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
`

const P3 = styled.p`
  gap: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  align-items: center;
  color: #000000;
`;

const Img1 = styled.img`
  width: 100%;
`;

const Img = styled.div`
  border-radius: 100%;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
