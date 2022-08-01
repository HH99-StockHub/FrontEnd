import React, { useState } from "react";
import styled from "styled-components";
import ChatRoom from "./ChatRoom";
import { ReactComponent as BtnSvg } from "../../image/Chat.svg";

const ChattingFixBtn = () => {
  const [chatState, setChatState] = useState(false);

  return (
    <WrapChatBox>
      <button
        onClick={() => {
          setChatState(!chatState);
        }}
      >
        <BtnSvg />
      </button>
      {chatState && <ChatRoom setChatState={setChatState} />}
    </WrapChatBox>
  );
};

export default ChattingFixBtn;

const WrapChatBox = styled.div`
  position: relative;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: var(--green1);
    cursor: pointer;
  }
`;
