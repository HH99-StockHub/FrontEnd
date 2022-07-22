import React, { useRef, useEffect } from "react";

// 훅
import { stompChat, stompConnect, stompDisConnect } from "../custom/stomp";
import { getCookie } from "../shared/Cookie";

const Chatting = () => {
  const chatMsg = useRef("");
  const token = getCookie("token");
  useEffect(() => {
    stompConnect(token);
    return () => {
      stompDisConnect(token);
    };
  }, []);
  return (
    <div>
      <input type="text" ref={chatMsg} />
      <button
        onClick={() => {
          stompChat.disSubscribeChat();
        }}
      >
        해제
      </button>
      <button onClick={stompChat.subscribeChat}>연결</button>
    </div>
  );
};

export default Chatting;
