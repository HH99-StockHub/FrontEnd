import React from "react";
import Vote from "../components/DetailArticle/Vote";
import { useDetailArticleMutate } from "../components/DetailArticle/useDetailArticle";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import styled from "styled-components";
import Title from "../components/DetailArticle/collection/Title";
import Writing from "../components/DetailArticle/collection/Writing";
import Stocks from "../components/DetailArticle/collection/Stocks";
import View from "../components/DetailArticle/collection/View";
import Comment from "../components/DetailArticle/collection/Comment";
import { useParams } from "react-router-dom";
import { useDetailArticleGet } from "../components/DetailArticle/useDetailArticle";
import { useNavigate } from "react-router-dom";
import SlideStock from "../repeat/SlideStock";
import { useEffect, useState } from "react";

const DetailArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //게시글 가져오기
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useDetailArticleGet.useContentInquiry(id);
  //게시글삭제
  const { mutate } = useDetailArticleMutate.useDeletePost();
  const [deleteBtn, setDeleteBtn] = useState(false);
  useEffect(() => {
    const currentUserId = localStorage.getItem("id");
    if (Number(currentUserId) === Number(data?.userId)) {
      setDeleteBtn(true);
    } else {
      setDeleteBtn(false);
    }
  }, [data?.userId]);

  return (
    <>
      <SlideStock />
      <TotalArticleHeader />
      <Div>
        <Container>
          <BtnBox>
            {deleteBtn ? (
              <Btn
                onClick={() => {
                  const data = { postId: id }; //게시글에 대한 데이터 넣기
                  mutate(data);
                  navigate(-1);
                }}
              >
                게시글 삭제
              </Btn>
            ) : null}
          </BtnBox>
          <Writing
            date={data.createdAt}
            view={data.viewCount}
            stockName={data.stockName}
            articleTitle={data.articleTitle}
            profileImage={data.profileImage}
            nickName={data.nickname}
            userId={data.userId}
          />

          <Stocks
            date={data.createdAt}
            stockReturn={data.stockReturn}
            stockPriceFirst={data.stockPriceFirst}
            stockPriceLast={data.stockPriceLast}
          />
          <View
            content1={data.content1}
            content2={data.content2}
            content3={data.content3}
            point1={data.point1}
            point2={data.point2}
            point3={data.point3}
          />
          <Vote
            id={id}
            voteUp={data.voteUpCount}
            voteDown={data.voteDownCount}
          />
          <Comment id={id} />
        </Container>
        <Title stockName={data.stockName} />
      </Div>
    </>
  );
};

const Container = styled.div`
  width: 821px;
`;
const Div = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 1240px;
  margin: 0 auto;
  position: relative;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Btn = styled.button`
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--gray2);
`;
export default DetailArticle;
