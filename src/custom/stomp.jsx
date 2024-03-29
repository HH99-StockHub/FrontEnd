import SockJS from "sockjs-client";
import Stomp from "stompjs";

let socket = null;
let stompClient = null;

// 연결
export const stompConnect = (token) => {
  socket = new SockJS(process.env.REACT_APP_STOMP_ENDPOINT_KEY);
  stompClient = Stomp.over(socket);
  stompClient.connect({}, {}, onError);
};

// 연결 끊기
export const stompDisConnect = (token) => {
  stompClient.disconnect(stompChat.disSubscribeChat, { token: token });
};

// 로그인 상태에서 연결
export const stompLoginConnect = (token, userId, setAlarmList) => {
  socket = new SockJS(process.env.REACT_APP_STOMP_ENDPOINT_KEY);
  stompClient = Stomp.over(socket);
  stompClient.connect(
    {},
    () => {
      stompNotice.subscribeNotice(userId, setAlarmList);
    },
    onError,
  );
};

// 채팅 stomp
export const stompChat = {
  subscribeUrl: "/sub/topic/stockhub",
  chatSendUrl: `/pub/chat/message`,
  // 구독
  subscribeChat: (token, data, setChatList, setId) => {
    stompClient.subscribe(stompChat.subscribeUrl, (response) => {
      const newMessage = JSON.parse(response.body);
      const subscribeId = response.headers.subscription;
      setId(() => {
        const newKey = subscribeId.split("-");
        return newKey[0] + "-" + (Number(newKey[1]) + 1);
      });
      setChatList((list) => {
        return [...list, newMessage];
      });
    });
    stompChat.chatJoinMsg(token, data);
  },
  // 구독 해제
  disSubscribeChat: (token, data, subscribeId) => {
    stompChat.chatOutMsg(token, data);
    stompClient.unsubscribe(subscribeId);
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
      rank: data.rank,
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
      rank: data?.rank,
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
  subscribeUrl: "/sub/topic/stockhub/",
  // 구독
  subscribeNotice: (userId, setAlarmList) => {
    stompClient.subscribe(stompNotice.subscribeUrl + userId, (response) => {
      const newMessage = JSON.parse(response.body);
      setAlarmList((list) => {
        return [newMessage, ...list];
      });
    });
  },
  // 구독 취소
  disSubscribeNotice: () => {
    stompClient.unsubscribe("sub-0");
  },
};
