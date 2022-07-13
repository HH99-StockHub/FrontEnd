import React from "react";
import { BeatLoader } from "react-spinners";
import styled from "styled-components";

const LoadingSpinner = React.memo(() => {
  return (
    <SpinnerDiv>
      <BeatLoader color="var(--green1)" />
    </SpinnerDiv>
  );
});

export default LoadingSpinner;

const SpinnerDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
