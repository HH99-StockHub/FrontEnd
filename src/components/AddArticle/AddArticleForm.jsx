import React, { useEffect, useRef, useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import styled from "styled-components";

//hook
import { api } from "../../shared/api";

const AddArticleForm = () => {
  // 투자 포인트 map용 잉여 배열
  const [countArr, setCountArr] = useState([{ key: 0 }]);
  // key state
  const [key, setKey] = useState(1);
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
    },
    onError: () => {
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
    } else {
      alert("최대 3개까지 등록 가능합니다");
    }
  };
  // 투자 포인트 삭제하기
  const deleteTextarea = (e, index) => {
    if (countArr.length !== 1) {
      const newArr = countArr.filter(
        (v) => String(v.key) !== String(e.target.id)
      );
      setCountArr(newArr);
      const newStockPoint = stockPoint.filter((v, l) => {
        return Number(l) !== Number(index);
      });
      setStockPoint(newStockPoint);
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
    <WrapForm>
      <form onSubmit={writeArticle}>
        <div>
          <h3>종목 선택</h3>
          <WrapSelect>
            <input type="text" value={stockInput} onChange={selectStockList} />
            {selectStockState &&
              stockArr.map((v) => {
                return <p onClick={selectStockOne}>{v}</p>;
              })}
            <span>얼마 상승 등 주가</span>
          </WrapSelect>
        </div>
        <div>
          <h3>제목</h3>
          <input type="text" ref={articleTitle} />
        </div>
        <h3>투자 포인트</h3>
        {countArr.map((v, l) => {
          return (
            <div key={v.key}>
              <input id={l} type="text" onChange={addStockPoint} />
              {l === 0 ? null : (
                <span
                  id={v.key}
                  onClick={(e) => {
                    deleteTextarea(e, l);
                  }}
                >
                  삭제
                </span>
              )}
              <br></br>
              <TextareaText
                name={l}
                cols="30"
                rows="5"
                onChange={addStockPoint}
              ></TextareaText>
            </div>
          );
        })}

        <button type="button" onClick={addTextarea}>
          +
        </button>
        <div>
          <button type="submit">등록하기</button>
          <button type="button">취소</button>
        </div>
      </form>
    </WrapForm>
  );
};

export default AddArticleForm;

const WrapForm = styled.div`
  border: 1px solid #000;
`;
const WrapSelect = styled.div`
  display: flex;
  span {
    border: 1px solid #000;
  }
`;
const TextareaText = styled.textarea`
  resize: none;
`;
