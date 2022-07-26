//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
// 컴포넌트
import LoadingSpinner from "../../repeat/LoadingSpinner";
import AddArticleChoosePoint from "./AddArticleChoosePoint";
import LineChart from "../Chart/LineChart";
//hook
import {
  useAddArticleFormMutate,
  useAddArticleFormQuery,
} from "./useAddArticleFormQuery";
import { toastify } from "../../custom/toastify";
// 모듈
import { stockData } from "../../Data/stockData";
import { addArticleState, showChart } from "../../state/client/modal";
//이미지
import { ReactComponent as SearchSvg } from "../../image/Search.svg";
import useSliceNum from "../../custom/sliceNum";
import ChartModal from "../Chart/ChartModal";
import { useMediaQuery } from "react-responsive";

const AddArticleForm = () => {
  // recoil
  const setModalState = useSetRecoilState(showChart);
  const setFormState = useSetRecoilState(addArticleState);
  // 주식 선택하기 일치 항목
  const [stockArr, setStockArr] = useState([]);
  const [selectStockState, setSelectStockState] = useState(null);
  // 주식 선택하기 일치 항목 인덱스 값
  const [stockIndex, setStockIndex] = useState(0);
  // 주식 선택하기 input 변경 값
  const [stockInput, setStockInput] = useState("");
  //선택 주식 주가
  const [currentStock, setCurrentStock] = useState("");

  // title가져오기
  const articleTitle = useRef("");
  const wrapTagStockList = useRef();
  // 투자 포인트
  const choosePoint = useRef("");

  // media
  const isSmall = useMediaQuery({
    query: "(max-height:720px)",
  });
  // ,찍기 훅
  const sliceNum = useSliceNum;
  // stockName 전체 부르기
  const { data = stockData } = useAddArticleFormQuery.useGetStockName();
  // useMutation 사용
  const { mutate: addArticle, isLoading: addLoading } =
    useAddArticleFormMutate.useAddArticleMutation();
  const { mutate: getStock, isLoading: stockLoading } =
    useAddArticleFormMutate.useGetArticleStock({
      onSuccess: (data) => {
        setCurrentStock(data.data);
      },
      onError: (data) => {
        toastify.error("주가 불러오기를 실패했습니다.");
      },
    });
  // 주식 종목 선택하기 list
  const selectStockList = (e) => {
    if (e.target.value === "") {
      setSelectStockState(null);
      setStockArr([]);
    } else {
      sameStock(e.target.value);
    }
    //debounce로 함수 실행 늦추기
    setStockInput(e.target.value);
  };

  // 검색어와 동일한 data만 색출하기
  const sameStock = debounce((word) => {
    setSelectStockState(true);
    setStockIndex(0);
    const changeData = data.filter((v) => {
      if (String(word).length !== 0) {
        return (
          v.stockName.slice(0, String(word).length).toLowerCase() ===
            word.toLowerCase() ||
          v.stockCode.slice(0, String(word).length).toLowerCase() ===
            word.toLowerCase()
        );
      } else {
        return false;
      }
    });
    setStockArr(changeData);
  }, 300);

  // 주식 종목 keydownHander
  const keyDownHandler = (e) => {
    // 폼 엔터키 눌렀을 때 submit 막기
    if (e.keyCode === 13) {
      e.preventDefault();
    }
    // 방향키 핸들링
    if (
      stockArr.length !== 0 &&
      selectStockState &&
      !e.nativeEvent.isComposing
    ) {
      if (e.code === "ArrowDown" && Number(stockIndex) !== stockArr.length) {
        setStockIndex(stockIndex + 1);
        // 자동 스크롤 내리기
        // 4번째마다 스크롤
        if (stockIndex % 4 === 0 && stockIndex !== 0) {
          const scrollPoint =
            wrapTagStockList?.current?.children[stockIndex - 1];
          scrollPoint.scrollIntoView({ behavior: "smooth" });
        }
      } else if (e.code === "ArrowUp" && Number(stockIndex) !== 1) {
        setStockIndex(stockIndex - 1);
        // 자동 스크롤 올리기
        // 4번째마다 스크롤
        if (stockIndex % 4 === 0 && stockIndex !== 0) {
          if (stockIndex === 4) {
            const scrollPoint = wrapTagStockList?.current?.children[0];
            scrollPoint.scrollIntoView();
          } else {
            const scrollPoint =
              wrapTagStockList?.current?.children[stockIndex - 6];
            scrollPoint.scrollIntoView();
          }
        }
      } else if (e.code === "Enter" && stockArr[stockIndex - 1] !== undefined) {
        setStockInput(stockArr[stockIndex - 1].stockName);
        setStockIndex(0);
        setSelectStockState(false);
        getStock(stockArr[stockIndex - 1].stockName);
      } else if (e.code === "Enter") {
        setStockInput(stockArr[stockIndex].stockName);
        setStockIndex(0);
        setSelectStockState(false);
        getStock(stockArr[stockIndex].stockName);
      }
    }
  };
  // 주식 종목 하나 선택하기
  const selectStockOne = (e) => {
    setStockInput(e.currentTarget.innerText.split("\n")[1]);
    setSelectStockState(false);
    getStock(e.currentTarget.innerText.split("\n")[1]);
  };

  // 게시글 작성하기
  const writeArticle = (e) => {
    e.preventDefault();
    let state = false;
    const refArr = choosePoint.current.children;

    // 투자 포인트 공백 체크
    for (let i = 0; i < refArr.length; i++) {
      if (
        refArr[i].children[1].value === undefined ||
        refArr[i].children[3].value === undefined ||
        refArr[i].children[1].value === "" ||
        refArr[i].children[3].value === ""
      ) {
        state = true;
      }
    }

    if (selectStockState === null || selectStockState) {
      toastify.info("종목을 선택해주세요");
    } else if (articleTitle.current.value === "" || state) {
      toastify.info("공백 없이 작성해주세요");
    } else {
      const data = {
        articleTitle: articleTitle.current.value,
        stockName: stockInput,
      };
      for (let i = 0; i < 3; i++) {
        if (refArr[i] !== undefined) {
          data["point" + String(i + 1)] = refArr[i].children[1].value;
          data["content" + String(i + 1)] = refArr[i].children[3].value;
        } else {
          data["point" + String(i + 1)] = "";
          data["content" + String(i + 1)] = "";
        }
      }
      addArticle(data);
    }
  };

  // 토글 창 오픈시 스크롤 막기 , 닫기 클릭 시 해제
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <WrapForm>
      <form onSubmit={writeArticle} autoComplete="off">
        <Header>
          <p>게시글작성</p>
        </Header>
        <WrapText>
          {addLoading && <LoadingSpinner />}
          {isSmall ? (
            <>
              <ScrollScope>
                <WrapSearch>
                  <WrapSelect>
                    <input hidden="hidden" />
                    <input
                      type="text"
                      value={stockInput}
                      placeholder="종목검색"
                      onChange={selectStockList}
                      onKeyDown={keyDownHandler}
                    />
                    <SearchSvg
                      width="17.49"
                      height="17.49"
                      fill="var(--green1)"
                    />
                    {selectStockState && (
                      <StockList index={stockIndex} ref={wrapTagStockList}>
                        {stockArr.map((v) => {
                          return (
                            <div key={v.id} onClick={selectStockOne}>
                              <span>{v.stockCode}</span>
                              <div>{v.stockName}</div>
                            </div>
                          );
                        })}
                      </StockList>
                    )}
                  </WrapSelect>
                  <span>
                    {stockLoading ? (
                      <LoadingSpinner />
                    ) : currentStock === "" ? (
                      "현재 주가"
                    ) : (
                      sliceNum(currentStock) + " 원"
                    )}
                  </span>
                </WrapSearch>
                {selectStockState === false && (
                  <ChartBox>
                    {/* 모달창 오픈 */}
                    <button
                      type="button"
                      onClick={() => {
                        setModalState(true);
                      }}
                    >
                      그래프 보기
                    </button>
                    <div>
                      <LineChart stockName={stockInput} />
                    </div>
                  </ChartBox>
                )}

                <WrapTitle>
                  <p>제목</p>
                  <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    ref={articleTitle}
                  />
                </WrapTitle>
                <WrapGoal>
                  <div>
                    <p>목표 가</p>
                    <div>
                      <input type="text" placeholder="숫자만 입력" />
                      <span>원</span>
                    </div>
                  </div>
                  <div>
                    <p>수익률 마감일</p>
                    <div>
                      <input type="text" placeholder="설정 없음" />
                    </div>
                  </div>
                </WrapGoal>
                <AddArticleChoosePoint choosePoint={choosePoint} />
              </ScrollScope>
            </>
          ) : (
            <>
              <WrapSearch>
                <WrapSelect>
                  <input hidden="hidden" />
                  <input
                    type="text"
                    value={stockInput}
                    placeholder="종목검색"
                    onChange={selectStockList}
                    onKeyDown={keyDownHandler}
                  />
                  <SearchSvg
                    width="17.49"
                    height="17.49"
                    fill="var(--green1)"
                  />
                  {selectStockState && (
                    <StockList index={stockIndex} ref={wrapTagStockList}>
                      {stockArr.map((v) => {
                        return (
                          <div key={v.id} onClick={selectStockOne}>
                            <span>{v.stockCode}</span>
                            <div>{v.stockName}</div>
                          </div>
                        );
                      })}
                    </StockList>
                  )}
                </WrapSelect>
                <span>
                  {stockLoading ? (
                    <LoadingSpinner />
                  ) : currentStock === "" ? (
                    "현재 주가"
                  ) : (
                    sliceNum(currentStock) + " 원"
                  )}
                </span>
              </WrapSearch>
              <ScrollScope>
                {selectStockState === false && (
                  <ChartBox>
                    {/* 모달창 오픈 */}
                    <button
                      type="button"
                      onClick={() => {
                        setModalState(true);
                      }}
                    >
                      그래프 보기
                    </button>
                    <div>
                      <LineChart stockName={stockInput} />
                    </div>
                  </ChartBox>
                )}

                <WrapTitle>
                  <p>제목</p>
                  <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    ref={articleTitle}
                  />
                </WrapTitle>
                <WrapGoal>
                  <div>
                    <p>목표 가</p>
                    <div>
                      <input type="text" placeholder="숫자만 입력" />
                      <span>원</span>
                    </div>
                  </div>
                  <div>
                    <p>수익률 마감일</p>
                    <div>
                      <input type="text" placeholder="설정 없음" />
                    </div>
                  </div>
                </WrapGoal>
                <AddArticleChoosePoint choosePoint={choosePoint} />
              </ScrollScope>
            </>
          )}
        </WrapText>
        <WrapBtn>
          <button type="submit">게시글 올리기</button>
          <button
            type="button"
            onClick={() => {
              setFormState(false);
            }}
          >
            취소하기
          </button>
        </WrapBtn>
      </form>
      {selectStockState === false && <ChartModal stockName={stockInput} />}
    </WrapForm>
  );
};

export default AddArticleForm;

const WrapForm = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: var(--white);
`;

const WrapText = styled.div`
  padding: 24px 79px 48px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--gray2);
  @media screen and (max-width: 700px) {
    padding: 24px 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--green1);
  color: var(--white);
  > p {
    font-size: 16px;
    font-weight: 700;
  }
`;

const WrapSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  > span {
    position: relative;
    display: flex;
    align-items: center;
    width: 170px;
    height: 44px;
    padding: 10px;
    border: 1px solid var(--gray2);
    font-size: 12px;
    color: var(--gray3);
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    > span {
      width: 100%;
    }
  }
`;

const WrapSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 44px;
  border: 1px solid var(--gray2);
  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;

const WrapTitle = styled.div`
  margin-top: 25px;
  > p {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  > input {
    width: 100%;
    height: 44px;
    padding: 0 10px;
    margin-bottom: 24px;
    font-size: 12px;
  }
`;
const WrapGoal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 24px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-size: 12px;
    > div {
      display: flex;
      border: 1px solid var(--gray2);
      padding: 15px 15px 15px 12px;
      input {
        border: none;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
const ScrollScope = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const ChartBox = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-end;
  > button {
    padding: 10px;
    width: 85px;
    background-color: var(--green1);
    color: var(--white);
    font-size: 12px;
    font-weight: 700;
  }
  > div {
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid var(--gray3);
    padding: 0 0 0 10px;
  }
`;

const StockList = styled.div`
  position: absolute;
  border: 1px solid var(--gray2);
  top: 42px;
  left: 0;
  width: 100%;
  height: 264px;
  overflow-y: auto;
  background-color: var(--white);
  z-index: 99;
  ::-webkit-scrollbar {
    width: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 44px;
    padding: 0 10px;
    font-size: 12px;
    span {
      font-weight: 700;
    }
    :hover {
      background-color: var(--gray1);
    }
  }
  > div:nth-child(${({ index }) => {
        return Number(index);
      }}) {
    background-color: var(--gray1);
  }
`;

const WrapBtn = styled.div`
  display: flex;
  gap: 22px;
  margin: 0 79px;
  button {
    width: 100%;
    height: 40px;
    color: var(--white);
    &:first-child {
      background-color: var(--blue1);
    }
    &:nth-child(2) {
      background-color: var(--gray3);
    }
  }
  @media screen and (max-width: 700px) {
    margin: 24px 0;
  }
`;
