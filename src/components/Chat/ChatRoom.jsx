import React, { useEffect } from "react";
import styled from "styled-components";

//컴포넌트
import ChatInput from "./ChatInput";
import ChatText from "./ChatText";
// 훅
import { stompChat, stompConnect, stompDisConnect } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
const ChatRoom = () => {
  const token = getCookie("token");
  const newToken = token?.split(" ")[1];

  useEffect(() => {
    stompConnect(token);
    // stompChat.subscribeChat();
    return () => {
      stompDisConnect(token);
      // stompChat.disSubscribeChat();
    };
  }, []);
  return (
    <WrapChat>
      <ChatText />
      <ChatInput />
    </WrapChat>
  );
};

export default ChatRoom;

const WrapChat = styled.div`
  border: 1px solid #000;
  width: 400px;
`;
