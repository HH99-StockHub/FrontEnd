import React from "react";
import styled from "styled-components";

const ChatCard = ({ data }) => {
  const msgType = (data) => {
    const userId = localStorage.getItem("id");
    switch (data.type) {
      case "TALK":
        if (data.nickname === userId) {
          return (
            <WrapMyMsg>
              <TextMyMessage>
                <span>{data.time}</span>
                <pre>{data.message}</pre>
              </TextMyMessage>
            </WrapMyMsg>
          );
        } else {
          return (
            <WrapOtherMsg>
              <img src={data.imgUrl} alt="프로필 사진" />
              <TextOtherMessage>
                <p>{data.nickname}</p>
                <div>
                  <pre>{data.message}</pre>
                  <span>{data.time}</span>
                </div>
              </TextOtherMessage>
            </WrapOtherMsg>
          );
        }
      case "JOIN":
        return (
          <WrapJoin>
            <p>{data.nickname}님이 입장했습니다</p>
          </WrapJoin>
        );
      case "ALARM":
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
  display: flex;
  gap: 8px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid var(--green1);
  }
`;
const WrapMyMsg = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TextMyMessage = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  pre {
    padding: 12px;
    max-width: 230px;
    background-color: var(--green2);
    color: var(--white);
    border-radius: 25px;
  }
  span {
    color: var(--gray3);
    font-size: 12px;
  }
`;
const TextOtherMessage = styled.div`
  p {
    font-size: 14px;
  }
  > div {
    display: flex;
    align-items: flex-end;
  }
  pre {
    padding: 12px;
    max-width: 230px;
    background-color: var(--gray1);
    border-radius: 25px;
  }
  span {
    color: var(--gray3);
    font-size: 12px;
  }
`;

const WrapJoin = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--gray3);
`;
const WrapOut = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--gray3);
`;
