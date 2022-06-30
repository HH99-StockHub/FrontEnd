//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useEffect, useRef, useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//hook
import { api } from "../../shared/api";
// 모듈
import { togleState } from "../../redux/modules/addArticle";
//이미지
import { ReactComponent as XBtnSvg } from "../../image/XBtn.svg";
import { ReactComponent as SearchSvg } from "../../image/Search.svg";
import { ReactComponent as PlusSvg } from "../../image/Plus.svg";
import { useNavigate } from "react-router-dom";

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
  // 주식 선택하기 input 변경 값
  const [stockInput, setStockInput] = useState("");
  // 투자 포인트 데이터
  const [stockPoint, setStockPoint] = useState([{}]);
  // title가져오기
  const articleTitle = useRef("");

  //예시 arr
  const data = [
    "삼기자9",
    "삼성기자8",
    "삼성호자7",
    "삼성바자6",
    "삼성전자5",
    "삼성전자4",
    "삼성전자3",
    "삼성전자2",
    "삼성전자1",
  ];

  // useMutation 사용
  const queryClient = useQueryClient();
  const fetcher = async (article) => {
    await api.post("/article", article);
  };

  const { mutate } = useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries("allArticle");
      alert("작성 완료");
      navigate("/");
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
  // 주식 종목 하나 선택하기
  const selectStockOne = (e) => {
    setStockInput(e.target.innerText);
    setSelectStockState(false);
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
        stockName: "삼성전자",
      };
      stockPoint.forEach((v, l) => {
        data["point" + String(l + 1)] = v.title;
        data["content" + String(l + 1)] = v.content;
      });
      mutate(data);
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
    const changeSotck = setTimeout(() => {
      const changeData = data.filter((v, l) => {
        if (stockInput.length !== 0) {
          return v.slice(0, stockInput.length) === stockInput;
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
  return (
    <WrapToggle>
      <WrapForm>
        <form onSubmit={writeArticle}>
          <Header>
            <button
              type="button"
              onClick={() => {
                dispatch(togleState(false));
              }}
            >
              <XBtnSvg width={"13.18"} height="13.18" />
            </button>
            <p>게시글작성</p>
            <button type="submit">등록하기</button>
          </Header>
          <WrapText>
            <WrapSearch>
              <WrapSelect>
                <input
                  type="text"
                  value={stockInput}
                  placeholder="종목검색"
                  onChange={selectStockList}
                />
                <SearchSvg width="17.49" height="17.49" />
                {selectStockState && (
                  <StockList>
                    {stockArr.map((v) => {
                      return <div onClick={selectStockOne}>{v}</div>;
                    })}
                  </StockList>
                )}
              </WrapSelect>
              <span>현재 주가</span>
            </WrapSearch>
            <WrapTitle>
              <h3>제목</h3>
              <input
                type="text"
                placeholder="제목을 입력해주세요"
                ref={articleTitle}
              />
            </WrapTitle>
            <WrapPoint>
              {countArr.map((v, l) => {
                return (
                  <WrapTextarea key={v.key}>
                    <WrapPointHeader>
                      <h3>투자 포인트 {l + 1} (최대 3개 작성 가능)</h3>
                      {l === 0 ? null : (
                        <button
                          type="button"
                          onClick={(e) => {
                            deleteTextarea(e, l);
                          }}
                        >
                          <XBtnSvg width="6.59" height="6.59" />
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
            </WrapPoint>
            {pointBtnState && (
              <button type="button" onClick={addTextarea}>
                투자포인트 추가 <PlusSvg />
              </button>
            )}
          </WrapText>
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
  width: 720px;
  border: 1px solid #000;
  background-color: #fff;
`;
const WrapText = styled.div`
  padding: 30px 73px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
  height: 57px;
  border-bottom: 1px solid #ccc;
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
  margin-bottom: 19px;
  > span {
    width: 170px;
    height: 44px;
    padding: 10px;
    border: 1px solid #000;
  }
`;
const WrapSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 385px;
  height: 44px;
  border: 1px solid #000;
  input {
    width: 332px;
  }
`;
const WrapTitle = styled.div`
  > h3 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  > input {
    width: 100%;
    height: 44px;
    padding: 14.5px 10px;
    margin-bottom: 30px;
  }
`;
const WrapPoint = styled.div`
  h3 {
    font-size: 12px;
  }
`;
const WrapPointHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
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

const StockList = styled.div`
  position: absolute;
  border: 1px solid #bbb;
  top: 42px;
  left: 0;
  width: 385px;
  height: 264px;
  overflow-y: auto;
  background-color: #fff;
  div {
    height: 44px;
    :hover {
      background-color: #bbb;
    }
  }
`;
