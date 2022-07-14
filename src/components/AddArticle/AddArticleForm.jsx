//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//hook
import { useAddArticleFormMutate } from "./useAddArticleFormQuery";
// 모듈
import { stockData } from "../../Data/stockData";
import { togleState } from "../../redux/modules/addArticle";
//이미지
import { ReactComponent as XBtnSvg } from "../../image/XBtn.svg";
import { ReactComponent as SearchSvg } from "../../image/Search.svg";
import LoadingSpinner from "../../repeat/LoadingSpinner";
import CandleChart from "../Chart/CandleChart";
import LineChart from "../Chart/LineChart";

const AddArticleForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 투자 포인트 map용 잉여 배열
  const [countArr, setCountArr] = useState([{ key: 0 }]);
  // key state
  const [key, setKey] = useState(1);
  // 포인트 추가하기 버튼 상태
  const [pointBtnState, setPointBtnState] = useState(true);
  // 주식 선택하기 일치 항목
  const [stockArr, setStockArr] = useState([]);
  const [selectStockState, setSelectStockState] = useState(null);
  // 주식 선택하기 일치 항목 인덱스 값
  const [stockIndex, setStockIndex] = useState(0);
  // 주식 선택하기 input 변경 값
  const [stockInput, setStockInput] = useState("");
  //선택 주식 주가
  const [currentStock, setCurrentStock] = useState("현재 주가");
  // 투자 포인트 데이터
  const [stockPoint, setStockPoint] = useState([{}]);
  // title가져오기
  const articleTitle = useRef("");
  const wrapTagStockList = useRef();

  const a = window.outerHeight;
  const b = window.innerHeight;
  console.log(a, b);
  //예시 arr
  const data = stockData;

  // useMutation 사용
  const { mutate: addArticle, stockLoading: addLoading } =
    useAddArticleFormMutate.useAddArticleMutation();
  const { mutate: getStock, isLoading: stockLoading } =
    useAddArticleFormMutate.useGetArticleStock({
      onSuccess: (data, variables, context) => {
        setCurrentStock(data.data);
      },
      onError: (err) => {
        alert("에러가 발생했습니다.");
      },
    });
  // 주식 종목 선택하기 list
  const selectStockList = (e) => {
    if (e.target.value === "") {
      setSelectStockState(null);
    } else {
      setSelectStockState(true);
    }
    setStockInput(e.target.value);
  };

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
      } else if (e.code === "Enter") {
        setStockInput(stockArr[stockIndex - 1].stockName);
        setStockIndex(0);
        setSelectStockState(false);
        getStock(stockArr[stockIndex - 1].stockName);
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
    countArr.forEach((v, l) => {
      if (
        stockPoint[l]?.content === undefined ||
        stockPoint[l]?.title === undefined ||
        stockPoint[l]?.content === "" ||
        stockPoint[l]?.title === ""
      ) {
        state = true;
      }
    });
    if (selectStockState === null || selectStockState) {
      alert("종목을 선택해주세요");
    } else if (articleTitle.current.value === "" || state) {
      alert("공백 없이 작성해주세요");
    } else {
      const data = {
        articleTitle: articleTitle.current.value,
        stockName: stockInput,
      };
      stockPoint.forEach((v, l) => {
        data["point" + String(l + 1)] = v.title;
        data["content" + String(l + 1)] = v.content;
      });
      addArticle(data);
    }
  };
  // 투자 포인트 작성하기
  const addStockPoint = (e) => {
    const element = e.target;
    const newStockPoint = [...stockPoint];
    //input일 때
    if (element.id !== "") {
      newStockPoint[element.id] = {
        ...newStockPoint[element.id],
        title: element.value,
      };
      setStockPoint(newStockPoint);
      // textarea일 때
    } else {
      newStockPoint[element.name] = {
        ...newStockPoint[element.name],
        content: element.value,
      };
      setStockPoint(newStockPoint);
    }
  };
  // 투자 포인트 input 추가하기
  const addTextarea = () => {
    if (countArr.length < 3) {
      setCountArr([...countArr, { key: key }]);
      setKey(key + 1);
      if (countArr.length === 2) setPointBtnState(false);
    } else {
      alert("최대 3개까지 등록 가능합니다");
    }
  };
  // 투자 포인트 삭제하기
  const deleteTextarea = (e, index) => {
    if (countArr.length !== 1) {
      const newArr = countArr.filter((v, l) => {
        return String(l) !== String(index);
      });
      setCountArr(newArr);
      const newStockPoint = stockPoint.filter((v, l) => {
        return Number(l) !== Number(index);
      });
      setStockPoint(newStockPoint);
      setPointBtnState(true);
    } else {
      alert("최소 하나의 투자 포인트가 있어야합니다.");
    }
  };

  // 검색어와 동일한 data만 색출하기
  useEffect(() => {
    setStockIndex(0);
    const changeSotck = setTimeout(() => {
      const changeData = data.filter((v, l) => {
        if (String(stockInput).length !== 0) {
          return (
            v.stockName.slice(0, String(stockInput).length) === stockInput ||
            v.stockCode.slice(0, String(stockInput).length) === stockInput
          );
        } else {
          return false;
        }
      });
      setStockArr(changeData);
    }, 300);
    if (stockInput === "") {
      setStockArr([]);
    }
    return () => {
      clearTimeout(changeSotck);
    };
  }, [stockInput]);

  // 토글 창 오픈시 스크롤 막기 , 닫기 클릭 시 해제
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <WrapToggle>
      <WrapForm>
        <form onSubmit={writeArticle} autoComplete="off">
          <Header>
            <p>게시글작성</p>
          </Header>
          <WrapText>
            {addLoading && <LoadingSpinner />}
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
                <SearchSvg width="17.49" height="17.49" fill="var(--green1)" />
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
              <span>{stockLoading ? <LoadingSpinner /> : currentStock}</span>
            </WrapSearch>
            <ScrollScope>
              {selectStockState === false && (
                <ChartBox>
                  <button type="button">그래프 보기</button>
                  <div>
                    <LineChart />
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
              <div>
                {countArr.map((v, l) => {
                  return (
                    <WrapTextarea key={v.key}>
                      <WrapPointHeader>
                        <p>투자 포인트 {l + 1} (최대 3개 작성 가능)</p>
                        {l === 0 ? null : (
                          <button
                            type="button"
                            onClick={(e) => {
                              deleteTextarea(e, l);
                            }}
                          >
                            <XBtnSvg
                              width="6.59"
                              height="6.59"
                              fill="var(--pink1)"
                            />
                          </button>
                        )}
                      </WrapPointHeader>
                      <input
                        id={l}
                        type="text"
                        placeholder="투자포인트 요약"
                        onChange={addStockPoint}
                      />

                      <br></br>
                      <TextareaText
                        name={l}
                        cols="30"
                        rows="5"
                        placeholder="상세내용 작성"
                        onChange={addStockPoint}
                      ></TextareaText>
                    </WrapTextarea>
                  );
                })}
              </div>
              {pointBtnState && (
                <PlusBtn type="button" onClick={addTextarea}>
                  투자포인트 추가
                </PlusBtn>
              )}
            </ScrollScope>
          </WrapText>
          <WrapBtn>
            <button type="submit">게시글 올리기</button>
            <button
              type="button"
              onClick={() => {
                dispatch(togleState(false));
              }}
            >
              취소하기
            </button>
          </WrapBtn>
        </form>
      </WrapForm>
    </WrapToggle>
  );
};

export default AddArticleForm;

const WrapToggle = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(34, 34, 34, 0.5);
`;
const WrapForm = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: #fff;
`;
const WrapText = styled.div`
  padding: 24px 79px 48px;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--gray2);
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 67px;
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
`;
const WrapSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 385px;
  height: 44px;
  border: 1px solid var(--gray2);
  input {
    width: 332px;
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

const ScrollScope = styled.div`
  max-height: 500px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const WrapPointHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
  > p {
    font-size: 12px;
  }
  > button {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const WrapTextarea = styled.div`
  input {
    width: 100%;
    height: 44px;
    padding: 14.5px 10px;
    margin-bottom: 8px;
  }
`;
const TextareaText = styled.textarea`
  width: 100%;
  height: 137px;
  padding: 10px;
  margin-bottom: 20px;
  resize: none;
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
    width: 100%;
    height: 200px;
    border: 1px solid var(--gray3);
    padding: 0 0 0 10px;
  }
`;

const StockList = styled.div`
  position: absolute;
  border: 1px solid var(--gray2);
  top: 44px;
  left: 0;
  width: 385px;
  height: 264px;
  overflow-y: auto;
  background-color: #fff;
  ::-webkit-scrollbar {
    width: 10px;
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
      background-color: #f6f6f6;
    }
  }
  > div:nth-child(${({ index }) => {
        return Number(index);
      }}) {
    background-color: #f6f6f6;
  }
`;

const PlusBtn = styled.button`
  padding: 8px 12px;
  font-size: 12px;
  color: var(--white);
  background-color: var(--green2);
`;

const WrapBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
  button {
    width: 100%;
    height: 40px;
    max-width: 562px;
    color: var(--white);
    &:first-child {
      background-color: var(--blue1);
    }
    &:nth-child(2) {
      background-color: var(--gray3);
    }
  }
`;
