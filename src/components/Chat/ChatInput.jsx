import React, { useRef } from "react";
import styled from "styled-components";

// 훅
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
const ChatInput = () => {
  // 채팅 글
  const message = useRef("");
  const token = getCookie("token");
  // 메세지 전송
  const sendMsg = (e) => {
    // shift + enter 줄바꿈
    if (e.keyCode === 13 && e.shiftKey === true) {
    } else if (
      e.keyCode === 13 &&
      e.shiftKey === false &&
      message.current.value !== ""
    ) {
      const msg = {};
      stompChat.chatSendMsg(token, msg);
      message.current.value = "";
    }
  };

  return (
    <WrapInput>
      <textarea type="text" ref={message} onKeyDown={sendMsg} />
      <button onClick={sendMsg}>전송</button>
    </WrapInput>
  );
};

export default ChatInput;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  textarea {
    width: 100%;
    resize: none;
    overflow-y: hidden;
  }
`;
