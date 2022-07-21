import { useRef, useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
// import jwt_decode from "jwt-decode";
import styled from "styled-components";

import { getCookie } from "./shared/Cookie";

const Chat2 = () => {
  const inputRef = useRef(null);
  const token = getCookie("token");
  const nickname = localStorage.getItem("id");
  useEffect(() => {
    // 지금은 소켓 전체를 연결 이후에는 소켓 연결과 구독을 나눌 예정
    SocketConnect(token);
    return () => {
      stompDisConnectUnsubscribe();
    };
  }, []);

  const socket = new SockJS("http://3.38.165.46/ws");
  const stompClient = Stomp.over(socket);

  // 에러
  const onError = (err) => {
    console.log(err);
  };

  //  채팅방 구독
  const stompSubscribe = () => {
    stompClient.subscribe(`/chatroom/public`, (response) => {
      const newMessage = JSON.parse(response.body);
      console.log(newMessage, "구독인데 이게 데이터로 들어오나?");
    });
    // 입장 메세지 보내기
    userJoinMsg();
  };
  // 알림 구독
  const alarmStomp = () => {
    stompClient.subscribe(`/chatroom/private/1`, (response) => {
      const newMessage = JSON.parse(response.body);
      console.log(newMessage, "구독인데 이게 데이터로 들어오나?");
    });
  };

  // socket 연결
  const SocketConnect = (token) => {
    stompClient.connect(
      {
        token: token,
      },
      stompSubscribe,
      onError,
    );
  };

  // socket 연결 해제
  const stompDisConnectUnsubscribe = () => {
    try {
      stompClient.disconnect(stompDissubcribe, { token: token });
    } catch (error) {
      console.log(error);
    }
  };

  // 채팅방 구독 해제 키워드는 변경 가능성 있음
  const stompDissubcribe = () => {
    stompClient.unsubscribe("sub-0");
  };

  // 참가 메세지  메세지 내용은 나중에 상의하여 진행
  const userJoinMsg = () => {
    const Msg = {
      type: "join",
      senderName: nickname,
    };
    stompClient.send("/app/message", {}, JSON.stringify(Msg));
  };

  // 보내기전 연결 테스트 함수
  function waitForConnection(stompClient, callback) {
    console.log(stompClient);
    // 실제 오류 날때까지 조건 보류
    // setTimeout(function () {
    // if(stompClient.ws.XXX === 1)
    //   if (stompClient.connected === true) {
    callback();
    //   } else {
    //     waitForConnection(stompClient, callback);
    //   }
    // }, 100);
  }

  // 메세지 보내기
  const HandleSend = (event) => {
    event.preventDefault();
    try {
      const data = {
        type: "TALK",
        roomId: "2",
        nickname: "string",
        sender: "string",
        createdAt: "10시",
      };
      console.log("보내기 시도");
      waitForConnection(stompClient, function () {
        stompClient.send(
          "/app/message",
          { token: token },
          JSON.stringify(data),
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StChattingContainer>
        <StChattingItem>
          <br />
          <button
            onClick={() => {
              stompSubscribe();
            }}
          >
            Connect
          </button>
          <br />
          <button onClick={alarmStomp}>create chatting room</button>
          <br />
          <form>
            <input type="text" ref={inputRef} id="input" />
            <input type="button" value="Send" onClick={HandleSend} />
          </form>
          <button
            onClick={() => {
              stompDissubcribe();
            }}
          >
            asd
          </button>
          {/* <button onClick={HandleUnsubscribe}>연결 끊기</button> */}
        </StChattingItem>
      </StChattingContainer>
    </>
  );
};

export default Chat2;
const StChattingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StChattingItem = styled.div``;
const StChattingDisplay = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
`;
