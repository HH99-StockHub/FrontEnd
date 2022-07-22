import SockJS from "sockjs-client";
import Stomp from "stompjs";

// const socket = new SockJS(process.env.REACT_APP_STOMP_ENDPOINT_KEY);
const socket = new SockJS("http://3.38.165.46/ws");

export const stompClient = Stomp.over(socket);
// 연결
export const stompConnect = (token) => {
  stompClient.connect(
    { token: token },
    () => {
      stompChat.subscribeChat(token);
    },
    onError,
  );
};
// 연결 끊기
export const stompDisConnect = (token) => {
  stompClient.disconnect(stompChat.disSubscribeChat, { token: token });
};
// 채팅 stomp
export const stompChat = {
  subscribeUrl: `/chatroom/public`,
  chatSendUrl: `/app/message`,
  // 구독
  subscribeChat: (token) => {
    // stompClient.subscribe(`/sub/topic/corinnechat`, (response) => {
    stompClient.subscribe(stompChat.subscribeUrl, (response) => {
      const newMessage = JSON.parse(response.body);
      console.log(newMessage, "구독인데 이게 데이터로 들어오나?");
    });
    stompChat.chatJoinMsg(token);
  },
  // 구독 해제
  disSubscribeChat: () => {
    stompChat.chatOutMsg();
    stompClient.unsubscribe("sub-0");
  },
  // 메세지 보내기
  chatSendMsg: (token, msg) => {
    const data = msg;
    stompClient.send(
      // "/app/message",
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(data),
    );
  },
  // 참가 메세지
  chatJoinMsg: (token, nickname) => {
    const Msg = {
      type: "join",
      senderName: "nickname",
    };
    stompClient.send(
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(Msg),
    );
    // stompClient.send("/app/message", {}, JSON.stringify(Msg));
  },
  // 퇴장 메세지
  chatOutMsg: (token, nickname) => {
    const Msg = {
      type: "join",
      senderName: nickname,
    };
    stompClient.send(
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(Msg),
    );
  },
};

const onError = (err) => {
  console.log(err);
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
