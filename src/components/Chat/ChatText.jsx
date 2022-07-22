import React from "react";
import styled from "styled-components";
// 컴포넌트
import ChatCard from "./ChatCard";

const ChatText = () => {
  const arr = [
    {
      type: "JOIN",
      nickname: "btae",
      imgUrl:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      message: "메세지",
      time: "11:11",
    },
    {
      type: "TALK",
      nickname: "btae",
      imgUrl:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      message: "내용이 들어가야지 ",
      time: "11:11",
    },
    {
      type: "OUT",
      nickname: "sd",
      imgUrl:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      message: "메세지",
      time: "11:11",
    },
    {
      type: "TALK",
      nickname: "sd",
      imgUrl:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      message: "메세지",
      time: "11:11",
    },
    {
      type: "TALK",
      nickname: "btae",
      imgUrl:
        "http://k.kakaocdn.net/dn/blMVJu/btrEPPM8P1C/9dOnQhSR3750TmF69k6mG0/img_640x640.jpg",
      message: "메세지",
      time: "11:11",
    },
  ];

  return (
    <WrapText>
      {arr.map((v, l) => {
        return <ChatCard key={l} data={v} />;
      })}
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
