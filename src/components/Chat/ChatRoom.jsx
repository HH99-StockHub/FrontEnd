import React from "react";
import styled from "styled-components";
//컴포넌트
import ChatInput from "./ChatInput";
import ChatText from "./ChatText";

const ChatRoom = () => {
  return (
    <WrapChat>
      <ChatText />
      <ChatInput />
    </WrapChat>
  );
};

export default ChatRoom;

const WrapChat = styled.div`
  position: absolute;
  top: -400px;
  right: 70px;
  width: 350px;
  border: 1px solid var(--gray2);
  background-color: var(--white);
  padding: 16px 16px 22px;
`;
