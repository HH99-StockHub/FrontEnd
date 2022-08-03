import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
import { rank } from "../../state/server/rank";
import { ReactComponent as BtnSvg } from "../../image/ChatSendBtn.svg";

const ChatInput = () => {
  // 내 랭크 가져오기
  const myRank = useRecoilValue(rank);
  // 채팅 글
  const message = useRef("");
  const [textareaState, setTextareaState] = useState(true);
  // 데이터 모으기
  const token = getCookie("token");
  const userId = localStorage.getItem("id");
  const imgUrl = localStorage.getItem("profileImg");
  const time = () => {
    const nowHour = dayjs(new Date()).format("H");
    const nowMin = dayjs(new Date()).format("mm");
    if (nowHour > 12) {
      return `오후 ${nowHour - 12}:${nowMin}`;
    } else {
      return `오전 ${nowHour}:${nowMin}`;
    }
  };
  // 메세지 전송
  const msgSend = () => {
    const data = {
      userId: userId,
      nickName: localStorage.getItem("nickName"),
      imgUrl: imgUrl,
      time: time(),
      message: message.current.value,
      rank: myRank,
    };
    stompChat.chatSendMsg(token, data);
    message.current.value = "";
  };

  // 텍스트 칸 조정
  const changeTextLine = (e) => {
    if (e.target.value.indexOf("\n") === -1) {
      setTextareaState(true);
    } else {
      setTextareaState(false);
    }
  };
  // keyDown Event
  const msgKeyDown = (e) => {
    // shift + enter 줄바꿈
    if (e.keyCode === 13) {
      if (e.shiftKey === false && message.current.value !== "") {
        msgSend();
        setTextareaState(true);
        e.preventDefault();
      } else if (message.current.value === "") {
        e.preventDefault();
      }
    }
  };

  return (
    <WrapInput state={textareaState}>
      <textarea
        type="text"
        placeholder="메시지를 입력해주세요."
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
