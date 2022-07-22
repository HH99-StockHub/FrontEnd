import React, { useState } from "react";
import styled from "styled-components";
// 컴포넌트
import ChatRoom from "./ChatRoom";
// 이미지
import { ReactComponent as BtnSvg } from "../../image/Chat.svg";

const ChattingFixBtn = () => {
  const [chatState, setChatState] = useState(false);

  return (
    <WrapChatBox
      onClick={() => {
        setChatState(!chatState);
      }}
    >
      <BtnSvg />
      {chatState && <ChatRoom />}
    </WrapChatBox>
  );
};

export default ChattingFixBtn;

const WrapChatBox = styled.div`
  position: relative;
  > div {
    position: absolute;
    top: -500px;
    right: 0;
  }
`;
