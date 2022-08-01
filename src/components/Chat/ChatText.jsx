import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";
import { useMediaQuery } from "react-responsive";
import ChatCard from "./ChatCard";
import { stompChat } from "../../custom/stomp";
import { getCookie } from "../../shared/Cookie";
import { chatSubscribeId, saveChat } from "../../state/server/chat";
import { ReactComponent as XBtnSvg } from "../../image/XBtn.svg";

const ChatText = ({ setChatState }) => {
  // recoil 채팅 데이터 저장하기
  const [chatList, setChatList] = useRecoilState(saveChat);
  // 구독 id
  const [subscribeId, setSubscribeId] = useRecoilState(chatSubscribeId);
  // 스크롤 BOX
  const textBox = useRef("");

  // media
  const isSmall = useMediaQuery({
    query: "(max-width : 470px)",
  });

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
      nickName: localStorage.getItem("nickName"),
      imgUrl: imgUrl,
      time: time(),
    };
    stompChat.subscribeChat(token, data, setChatList, setSubscribeId);
    return () => {
      stompChat.disSubscribeChat(token, data, subscribeId);
    };
  }, []);

  // 채팅 저장하기
  useEffect(() => {
    textBox.current.scrollTop = textBox.current.scrollHeight;
  }, [chatList]);

  return (
    <>
      {isSmall && (
        <ColseBtn>
          <button
            onClick={() => {
              setChatState(false);
            }}
          >
            <XBtnSvg width={"10px"} height="10px" fill="var(--black)" />
          </button>
        </ColseBtn>
      )}
      <WrapText ref={textBox}>
        {chatList.length !== 0 ? (
          <>
            {chatList.map((v, l) => {
              return <ChatCard key={l} data={v} />;
            })}
          </>
        ) : null}
      </WrapText>
    </>
  );
};

export default ChatText;

const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  overflow-y: auto;
  height: 400px;

  &::-webkit-scrollbar {
    width: 0;
  }
  @media screen and (max-width: 470px) {
    height: 90%;
    @media screen and (max-height: 800px) {
      height: 85%;
    }
    @media screen and (max-height: 570px) {
      height: 80%;
    }
  }
`;

const ColseBtn = styled.div`
  height: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;
