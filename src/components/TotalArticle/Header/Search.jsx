//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchSvg } from "../../../image/Search.svg";

const Search = () => {
  return (
    <FormStyle>
      <input type="text" placeholder="관심있는 내용을 검색하세요" />
      <SearchSvg width="17.49" height="17.49" fill="#008B2F" />
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
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  input {
    width: 100%;
    border: none;
    outline: none;
}
`;
