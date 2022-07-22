import React from "react";
import styled from "styled-components";

const ChatCard = ({ data }) => {
  const msgType = (data) => {
    switch (data.type) {
      case "TALK":
        if (data.nickname === "btae") {
          return (
            <WrapMyMsg>
              <div>
                <p>{data.nickname}</p>
                <img src={data.imgUrl} alt="프로필 사진" />
              </div>
              <TextMessage>
                <span>{data.time}</span>
                <p>{data.message}</p>
              </TextMessage>
            </WrapMyMsg>
          );
        } else {
          return (
            <WrapOtherMsg>
              <div>
                <img src={data.imgUrl} alt="프로필 사진" />
                <p>{data.nickname}</p>
              </div>
              <TextMessage>
                <p>{data.message}</p>
                <span>{data.time}</span>
              </TextMessage>
            </WrapOtherMsg>
          );
        }
      case "JOIN":
        return (
          <WrapJoin>
            <p>{data.nickname}님이 입장했습니다</p>
          </WrapJoin>
        );
      case "OUT":
        return (
          <WrapOut>
            <p>{data.nickname}님이 나갔습니다</p>
          </WrapOut>
        );
      default:
        break;
    }
  };

  return <>{msgType(data)}</>;
};

export default ChatCard;

const WrapOtherMsg = styled.div`
  border: 1px solid #000;
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #000;
  }
`;
const WrapMyMsg = styled.div`
  border: 1px solid #000;
  > div {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #000;
  }
`;

const TextMessage = styled.div`
  background-color: aqua;
`;

const WrapJoin = styled.div`
  border: 1px solid #000;
  background-color: aliceblue;
  text-align: center;
  width: 300px;
  margin: 0 auto;
`;
const WrapOut = styled.div`
  border: 1px solid #000;
  background-color: aliceblue;
  text-align: center;
  width: 300px;
  margin: 0 auto;
`;
