import React from "react";
import styled from "styled-components";
const PopularText = React.memo(({ upCount, downCount }) => {
  return (
    <WrapText>
      <p>추 {upCount}</p>
      <p>비 {downCount}</p>
    </WrapText>
  );
});

export default PopularText;

const WrapText = styled.div`
  display: flex;
  gap: 10px;
`;
