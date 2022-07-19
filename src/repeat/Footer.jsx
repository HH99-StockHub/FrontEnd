import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <WrapFooter>footer</WrapFooter>;
};

export default Footer;
const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background-color: var(--gray1);
`;
