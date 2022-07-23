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
    if (e.keyCode === 13) {
      if (e.shiftKey === false && message.current.value !== "") {
        const msg = {};
        stompChat.chatSendMsg(token, msg);
        message.current.value = "";
        e.preventDefault();
      } else if (message.current.value === "") {
        e.preventDefault();
      }
    }
  };

  return (
    <WrapInput>
      <textarea
        type="text"
        placeholder="메시지들 입력해주세요.  &#13;&#10;줄바꿈은 shift + enter"
        ref={message}
        onKeyDown={sendMsg}
      />
      <button onClick={sendMsg}>전송</button>
    </WrapInput>
  );
};

export default ChatInput;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  textarea {
    background-color: #f00;
    width: 100%;
    resize: none;
    overflow-y: hidden;
    padding: 10px;
  }
`;
