//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//훅
import { toastify } from "../../../custom/toastify";
// 이미지
import { ReactComponent as SearchSvg } from "../../../image/Search.svg";

const Search = () => {
  const navigate = useNavigate();
  const searchInput = useRef("");

  // 검색하기
  const submit = (e) => {
    e.preventDefault();
    if (searchInput.current.value.trim() !== "") {
      navigate(`/search/article/keyword/${searchInput.current.value}`);
      searchInput.current.value = "";
    } else {
      toastify.error("최소 한 글자라도 입력해야합니다");
      searchInput.current.value = "";
    }
  };

  return (
    <FormStyle onSubmit={submit}>
      <input
        type="text"
        placeholder="관심있는 내용을 검색하세요"
        ref={searchInput}
      />
      <button>
        <SearchSvg width="17.49" height="17.49" fill="#008B2F" />
      </button>
    </FormStyle>
  );
};

export default Search;

const FormStyle = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 11px;
  width: 333px;
  height: 40px;
  border-radius: 25px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;
