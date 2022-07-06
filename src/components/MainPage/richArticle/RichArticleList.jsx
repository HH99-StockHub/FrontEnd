//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//컴포넌트
import CardImg from "../common/CardImg";
import CardTextRich from "../common/CardTextRich";
// query 훅
import { useGetRichArticles } from "../../../custom/reactQuery/useQuery";
const RichArticleList = () => {
  // 데이터 받기 전 예시 arr
  const data = [1, 2, 3, 4, 5, 6];
  // useQuery
  // const {data=[]} = useGetRichArticles()
  return (
    <div>
      <ArticleBox>
        {data.map((v) => {
          return (
            <Link to={`/detail/article/${data.id}`}>
              <WrapCard>
                <WrapImgText>
                  <CardImg
                    imgUrl={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAyCAMAAABRcrRnAAAAY1BMVEX////90QD9zwD90AD9zgD+777+7bn+67T9zAD91jf91kL///3+44z+4YP90iT/+ej//PL+67D+8cj+89L/9+H+6KH92VX91kj90Rb+6an+5ZX92l3+9dj+78L92E/+33n+3Wy9XCD4AAADP0lEQVRYhe2X2babMAxFsawmTGEKhAA3If//lZVsY2xD2ty1+tB2oZcwHNi2JR2TKDriiP8vsrL++lzcfkP8y3gAxuePxRLjH3+Ge0YBp4/FIODgHtyD+3dys75Z75T1/Ez7W359x02uW3HoZtdxej6nvInC8LgzYJ7pEZxTBKkCn9Uu9wU4muHWq/hmxRRNYq5jES6Ty6VjEesR17EUUgKAFELC8i6XW7O4VYeDK76v4BH5YUS+jvNbbksyNF6dAcRpXj/OMz87bblK/FjFfX5+1C9XrLDY19fr6cZHl3fcQgqwN7tBL3hUAj3ThtzsLgTkllAbceuIvxhW6+OGj70kr9wXCPmMtnEiWBdyJ7kv5tcZ8VPaQ3oJCpnscgca0t0tChto185yOxZnO9qKxqMzyYko1hu9FOgW+8JV+drf0xMhe5+rlrDdFaeLeABnupozbrmcryUZYdykTD1uxeI3ZtNLs54vf4JlkEXDneiNQaVzZBRb7uQWYCC23ILG5qQto/P7hkv52pRJc3kmBQeN1ONSf8jbO7FY6od6tnArIKE7zrniZjF1hf+V1RQolRcAtYbHrVjs28/j7oo1l468Ak6o4pz56/kOYaGwGyFMF4q8CObbheLBF3+DS84s3MslG8/S51OYXxY7XcStAIvY5veTdabfVNpZUczSmdGmrgIxV265nLh1Bb+tK7pO44PXclW4lbPlViy25V84nvzdPjLGsXQ2Vaw13x2uNg7jCjSI1alXLvuGYxT1vm9EykIFGtcn7tqgO1y1ZRqjr8AdpOWWvk+mb3ySIuf60Fl189eF/avFvPOorFLmFh/VYlPGk7sOVPKrKOCy0mwNnBzlmlmTotjj0ioIqQuWHtOumT3StX+9xKlOcz6LfG5GO7Ae1ZV1t3F8kSFA2L+LWJhKaVzxfd3vGAZFXp/HxK2dLVft8frf4YVnKekDBbD7wj2uSqD+d6i+SUCJBxJbuxhQmhtCBlj6kALnf2gTL98uHSC5HuKliqoYzatqhHjdhx7x8gnRsZYeyJV4rab2RjfYQbH3FpmiatvWae/BGkDWdN2g1STZFXeueNTizIr1opzyeb6cy+iII4444p+Lnw9/K/gAI8FxAAAAAElFTkSuQmCC"
                    }
                  />
                  <CardTextRich company={"카카오"} stock={"12"} />
                </WrapImgText>
                <WrapText>
                  글 제목이 있으면 유저들이 미리 내용을 파악할 수 있어요
                </WrapText>
              </WrapCard>
            </Link>
          );
        })}
      </ArticleBox>
    </div>
  );
};

export default RichArticleList;

const ArticleBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px 0;
  flex-wrap: wrap;
  width: 588px;
`;
const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 179px;
  height: 112px;
  padding: 18px 14px;
  border: 1px solid #000;
`;
const WrapImgText = styled.div`
  display: flex;
  gap: 9px;
`;

const WrapText = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  display: -webkit-box;
  width: 100%;
  height: 32px;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
