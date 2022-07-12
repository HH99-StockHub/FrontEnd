import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin : 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration : none;
    color: inherit;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
  input, textarea {
    outline: none;
    border: 1px solid var(--gray2);
  }
  body{
  }
  :root {
   --black : #000 ;
   --white : #fff ;
   --green1 : #54BA7D;
   --green2 : #008B2F;
   --green3 : #086326;
   --gray1 : #F6F6F6 ;
   --gray2 : #E0E0E0 ;
   --gray3 : #B1B1B1;
   --blue1 : #5AA9C2;
   --blue2 : #3246FF ;
   --pink1 : #FF607C;
   --pink2 : #FF3232;
  }
`;
export default GlobalStyle;
