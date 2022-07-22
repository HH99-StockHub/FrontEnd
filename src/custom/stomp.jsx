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

// 채팅 stomp
export const stompChat = {
  subscribeUrl: "/topic/global-notifications",
  chatSendUrl: `/pub/chat/message`,
  // 구독
  subscribeChat: (token) => {
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
    const data = {
      // type: "TALK",
      // topicName: "corinnechat",
      // userId: userinfo.userId,
      // nickname: userinfo.nickname,
      // imageUrl: userinfo.imageUrl,
      // exp: userinfo.exp,
      // sendTime: sendTm,
      // clear: clear6,
      // message: inputMessage,
    };
    stompClient.send(
      // "/app/message",
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(data),
    );
  },
  // 참가 메세지
  chatJoinMsg: (token, msg) => {
    const Msg = {
      type: "join",
      senderName: "nickname",
    };
    stompClient.send(
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(Msg),
    );
  },
  // 퇴장 메세지
  chatOutMsg: (token, msg) => {
    const Msg = {
      type: "join",
      senderName: "nickname",
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

// 알림
export const stompNotice = {
  subscribeUrl: "",
  noticeSendUrl: "",
  // 구독
  subscribeNotice: () => {
    stompClient.subscribe(stompNotice.subscribeUrl, (response) => {
      const newMessage = JSON.parse(response.body);
      console.log(newMessage, "구독인데 이게 데이터로 들어오나?");
    });
  },
  // 구독 취소
  disSubscribeNotice: () => {
    stompClient.unsubscribe("sub-0");
  },
};
