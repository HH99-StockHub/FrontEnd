import SockJS from "sockjs-client";
import Stomp from "stompjs";
const socket = new SockJS(process.env.REACT_APP_STOMP_ENDPOINT_KEY);

export const stompClient = Stomp.over(socket);
// 연결
export const stompConnect = (token) => {
  stompClient.connect({ token: token }, {}, onError);
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
  subscribeUrl: "/sub/topic/stockhub",
  chatSendUrl: `/pub/chat/message`,
  // 구독
  subscribeChat: (token, data, setText) => {
    stompClient.subscribe(stompChat.subscribeUrl, (response) => {
      const newMessage = JSON.parse(response.body);
      setText(newMessage);
    });
    stompChat.chatJoinMsg(token, data);
  },
  // 구독 해제
  disSubscribeChat: (token, data) => {
    stompChat.chatOutMsg(token, data);
    stompClient.unsubscribe("sub-0");
  },
  // 메세지 보내기
  chatSendMsg: (token, data) => {
    const msg = {
      type: "TALK",
      userId: data.userId,
      nickName: data.nickName,
      imageUrl: data.imgUrl,
      sendTime: data.time,
      clear: true,
      message: data.message,
    };
    stompClient.send(
      // "/app/message",
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(msg),
    );
  },
  // 참가 메세지
  chatJoinMsg: (token, data) => {
    const msg = {
      type: "ENTER",
      userId: data.userId,
      nickName: data.nickName,
      imageUrl: data.imgUrl,
      sendTime: data.time,
      clear: true,
      message: "",
    };
    stompClient.send(
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(msg),
    );
  },
  // 퇴장 메세지
  chatOutMsg: (token, data) => {
    const msg = {
      type: "ALARM",
      userId: data.userId,
      nickName: data.nickName,
      imageUrl: data.imgUrl,
      sendTime: data.time,
      clear: true,
      message: `${data.nickName}님이 나가셨습니다.`,
    };
    stompClient.send(
      stompChat.chatSendUrl,
      { token: token },
      JSON.stringify(msg),
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
