import React, { useRef, useState } from "react";
import styled from "styled-components";
// 훅
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
//이미지
import { ReactComponent as BtnSvg } from "../../image/ChatSendBtn.svg";
const ChatInput = () => {
  // 채팅 글
  const message = useRef("");
  const token = getCookie("token");
  const [textareaState, setTextareaState] = useState(true);

  // 메세지 전송
  const msgSend = () => {
    const msg = {};
    stompChat.chatSendMsg(token, msg);
  };

  // 텍스트 칸 조정
  const changeTextLine = (e) => {
    if (e.target.value.indexOf("\n") === -1 && !textareaState) {
      setTextareaState(true);
    }
  };
  // keyDown Event
  const msgKeyDown = (e) => {
    // shift + enter 줄바꿈
    if (e.keyCode === 13) {
      if (e.shiftKey === false && message.current.value !== "") {
        msgSend();
        message.current.value = "";
        setTextareaState(true);
        e.preventDefault();
      } else if (message.current.value === "") {
        e.preventDefault();
      } else {
        setTextareaState(false);
      }
    }
  };

  return (
    <WrapInput state={textareaState}>
      <textarea
        type="text"
        placeholder="메시지들 입력해주세요."
        ref={message}
        onChange={changeTextLine}
        onKeyDown={msgKeyDown}
      />
      <button onClick={msgSend}>
        <BtnSvg />
      </button>
    </WrapInput>
  );
};

export default ChatInput;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 11px 11px 16px;
  border: 1px solid var(--gray2);
  border-radius: 30px;
  textarea {
    ${({ state }) => (state ? "height : 20px;" : null)}
    width: 100%;
    resize: none;
    overflow-y: hidden;
    border: none;
  }
  button {
    display: flex;
  }
`;
