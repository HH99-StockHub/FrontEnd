import { useRef, useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
// import jwt_decode from "jwt-decode";
import styled from "styled-components";

import { getCookie } from "./shared/Cookie";

const Chat = () => {
  const aa = (name) => {
    let value = "; " + document.cookie;
    let parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  };
  const inputRef = useRef(null);
  // const [roomId, setRoomId] = useState(null);
  const token = getCookie("token");
  // const newToken = token;
  const newToken = token?.split(" ")[1];
  useEffect(() => {
    SocketConnect(newToken);
  });

  //handshake
  const target = "http://3.35.4.42/chat"; // http URL
  // const target = "http://3.35.4.42/ws-stomp"; // http URL
  // "/sub"
  const socket = new SockJS(target);
  const ws = Stomp.over(socket);
  const roomId = "2";

  // server에서 Login, passcode 뭐 받는지 확인 필요
  const SocketConnect = (newToken) => {
    console.log("연결시도 중");
    try {
      ws.connect(
        {
          token: newToken,
        },
        () => {
          ws.subscribe(
            `/app/api/chat/rooms/${roomId}`,
            (response) => {
              console.log("aa");
              const newMessage = JSON.parse(response.body);
              console.log(newMessage, "구독인데 이게 데이터로 들어오나?");
              // console.log("보낸사람:", newMessage.sender);
              // console.log("받은 메세지:", newMessage.message);
            },
            {
              token: newToken,
            },
          );
        },
      );
    } catch (error) {
      console.log(error.response);
      console.log("연결 에러");
    }
  };

  const meetingRoomHandler = () => {
    const data = {
      meetingTitle: "string",
      meetingDate: "string",
      meetingTime: "00:00",
      meetingSum: "string",
      meetingTheme: "string",
      meetingDuration: "0시간",
      teamId: 1,
    };
    console.log(data);
    // meetingMutate(data);
  };

  const chattingRoomHandler = () => {
    const data = {
      meetingId: 1,
    };
    console.log(data);
  };

  function waitForConnection(ws, callback) {
    console.log("무한으로 보낼때까지 돌려");
    console.log(ws);
    setTimeout(function () {
      if (ws.ws.readyState === 1) {
        callback();
      } else {
        waitForConnection(ws, callback);
      }
    }, 1);
  }

  const HandleSend = async (event) => {
    event.preventDefault();
    try {
      const data = {
        type: "TALK",
        roomId: "1",
        sender: "sender",
        message: "messageText",
      };
      const token = getCookie("token");
      console.log("보내기 시도");
      waitForConnection(ws, function () {
        ws.send("/api/chat/message", { token: newToken }, JSON.stringify(data));
        // ws.send("/queue/test", {}, "this is a message from the client")
        console.log("clicked anyway");
        console.log(JSON.stringify(data));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const callbackFn = (message) => {
    if (message.body) {
      console.log(message);
      alert(`got message with body: ${message.body}`);
    } else {
      console.log("got nothing");
    }
  };

  // const subscription = ws.subscribe("/sub/api/chat/rooms/3", callbackFn)

  // const HandleUnsubscribe = () => {
  //   subscription.unsubscribe();
  //   alert("연결 끊김");
  // };
  const userJoin = (event) => {
    event.preventDefault();

    var chatMessage = {
      type: "TALK",
      roomId: roomId,
      sender: "sender",
      message: "messageText",
    };
    ws.send(
      "/pub/api/chat/message",
      { token: newToken },
      JSON.stringify(chatMessage),
    );
  };
  return (
    <>
      <StChattingContainer>
        <StChattingItem>
          <button onClick={meetingRoomHandler}>create meeting room</button>
          <br />
          <button onClick={SocketConnect}>Connect</button>
          <br />
          <button onClick={chattingRoomHandler}>create chatting room</button>
          <br />
          <form>
            <input type="text" ref={inputRef} id="input" />
            <input type="submit" value="Send" onClick={userJoin} />
          </form>

          {/* <button onClick={HandleUnsubscribe}>연결 끊기</button> */}
        </StChattingItem>
      </StChattingContainer>
    </>
  );
};

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

export default Chat;
