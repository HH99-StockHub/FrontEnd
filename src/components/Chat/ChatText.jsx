import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
// 컴포넌트
import ChatCard from "./ChatCard";
// 훅
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";

const ChatText = () => {
  // recoil 채팅 데이터 저장하기
  const [text, setText] = useState();
  const [textList, setTextList] = useState([]);

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
    stompChat.subscribeChat(token, data, setText);
    return () => {
      stompChat.disSubscribeChat(token, data);
    };
  }, []);

  // 채팅 저장하기
  useEffect(() => {
    if (textList.length !== 0) {
      setTextList([...textList, text]);
    } else if (text !== undefined) {
      setTextList([text]);
    }
  }, [text]);

  return (
    <WrapText>
      {/* {textList.map((v, l) => {
        return <ChatCard key={l} data={v} />;
      })} */}
      {textList.length !== 0 ? (
        <>
          {textList.map((v, l) => {
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
`;
