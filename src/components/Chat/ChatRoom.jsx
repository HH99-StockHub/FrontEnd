import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatText from "./ChatText";

const ChatRoom = ({ setChatState }) => {
  return (
    <WrapChat>
      <div>
        <ChatText setChatState={setChatState} />
      </div>
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
  @media screen and (max-width: 470px) {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 90%;
    height: 90%;
  }
  > div:first-child {
    position: relative;
  }
`;
