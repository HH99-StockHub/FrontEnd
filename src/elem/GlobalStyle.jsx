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
   --blue1 : #78c0d6;
   --blue2 : #5AA9C2 ;
   --blue3 : #2b839e ;
  }
`;
export default GlobalStyle;
