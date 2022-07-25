import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";
// 컴포넌트
import ChatCard from "./ChatCard";
// 훅
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
// 모듈
import { saveChat } from "../../state/server/chat";

const ChatText = () => {
  // recoil 채팅 데이터 저장하기
  const [chatList, setChatList] = useRecoilState(saveChat);

  // 스크롤 BOX
  const textBox = useRef("");

  // 구독 data
  const token = getCookie("token");
  const userId = localStorage.getItem("id");
  const imgUrl = localStorage.getItem("profileImg");
  // 채팅방 구독하기
  const time = () => {
    const nowHour = dayjs(new Date()).format("H");
    const nowMin = dayjs(new Date()).format("mm");
    if (nowHour > 12) {
      return `오후 ${nowHour - 12}:${nowMin}`;
    } else {
      return `오전 ${nowHour}:${nowMin}`;
    }
  };
  // 구독하기
  useEffect(() => {
    const data = {
      userId: userId,
      nickName: "btae",
      imgUrl: imgUrl,
      time: time(),
    };
    stompChat.subscribeChat(token, data, setChatList);
    return () => {
      stompChat.disSubscribeChat(token, data);
    };
  }, []);

  // 채팅 저장하기
  useEffect(() => {
    textBox.current.scrollTop = textBox.current.scrollHeight;
  }, [chatList]);

  return (
    <WrapText ref={textBox}>
      {chatList.length !== 0 ? (
        <>
          {chatList.map((v, l) => {
            return <ChatCard key={l} data={v} />;
          })}
        </>
      ) : null}
    </WrapText>
  );
};

export default ChatText;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
