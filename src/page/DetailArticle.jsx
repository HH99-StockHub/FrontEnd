import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import TotalArticleHeader from "../components/TotalArticle/Header/TotalArticleHeader";
import Title from "../components/DetailArticle/collection/Title";
import Writing from "../components/DetailArticle/collection/Writing";
import Stocks from "../components/DetailArticle/collection/Stocks";
import View from "../components/DetailArticle/collection/View";
import Comment from "../components/DetailArticle/collection/Comment";
import Vote from "../components/DetailArticle/Vote";
import SlideStock from "../repeat/SlideStock";
import LoadingSpinner from "../repeat/LoadingSpinner";
import HelmetComponents from "../repeat/HelmetComponents";
import { useDetailArticleMutate } from "../components/DetailArticle/useDetailArticle";
import { useDetailArticleGet } from "../components/DetailArticle/useDetailArticle";
import { toastify } from "../custom/toastify";
import { useMediaQuery } from "react-responsive";

const DetailArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //게시글 가져오기
  const {
    data = [],
    isLoading,
    isError,
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

  if (isError) toastify.error("정보 불러오기를 실패했습니다.");

  const isMiddle = useMediaQuery({
    query: "(max-width:1240px)",
  });
  return (
    <>
      <HelmetComponents title={`${data.stockName} 게시글`} />
      <SlideStock />
      <TotalArticleHeader detail={false} />
      <Div>
        <Container>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <BtnBox>
                {deleteBtn ? (
                  <Btn
                    onClick={() => {
                      Swal.fire({
                        title: "게시글을 삭제 하시겠습니까?",
                        text: "한 번 삭제된 게시글은 복구할 수 없습니다.",
                        icon: "warning",

                        showCancelButton: true,
                        confirmButtonColor: "var(--green1)",
                        cancelButtonColor: "var(--gray2)",
                        confirmButtonText: "삭제",
                        cancelButtonText: "취소",

                        reverseButtons: false, // 버튼 순서 거꾸로
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire("삭제가 완료됐습니다.", "", "success");
                          const data = { postId: id }; //게시글에 대한 데이터 넣기
                          mutate(data);
                          navigate(-1);
                        }
                      });
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
                rank={data.rankTitle}
                richList={data.richList}
                popularList={data.popularList}
              />

              <Stocks
                date={data.createdAt}
                stockReturn={data.stockReturn}
                stockPriceFirst={data.stockPriceFirst}
                stockPriceLast={data.stockPriceLast}
                deadline={data.deadline}
                targetReturn={data.targetReturn}
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
                userId={data.userId}
                id={id}
                voteUp={data.voteUpCount}
                voteDown={data.voteDownCount}
              />
              {!isMiddle && <Comment id={id} />}
            </>
          )}
        </Container>
        <Title stockName={data.stockName} id={id} />
      </Div>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 820px;
  @media screen and (max-width: 1240px) {
    max-width: 1240px;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 16px;
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
  @media screen and (max-width: 1240px) {
    flex-direction: column;
    width: 90%;
  } ;
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
