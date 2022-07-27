import React from "react";
import styled from "styled-components";
import ProfileImg from "../../elem/ProfileImg";

const ChatCard = ({ data }) => {
  const msgType = () => {
    const userId = localStorage.getItem("id");
    switch (data.type) {
      case "TALK":
        if (String(data.userId) === userId) {
          return (
            <WrapMyMsg>
              <TextMyMessage>
                <span>{data.sendTime}</span>
                <pre>{data.message}</pre>
              </TextMyMessage>
            </WrapMyMsg>
          );
        } else {
          return (
            <WrapOtherMsg>
              <ProfileImg size="size2" rank={data.rank} src={data.imageUrl} />
              <TextOtherMessage>
                <p>{data.nickName}</p>
                <div>
                  <pre>{data.message}</pre>
                  <span>{data.sendTime}</span>
                </div>
              </TextOtherMessage>
            </WrapOtherMsg>
          );
        }
      case "ENTER":
        return (
          <WrapJoin>
            <p>{data.nickName}님이 입장했습니다</p>
          </WrapJoin>
        );
      case "ALARM":
        return (
          <WrapOut>
            <p>{data.nickName}님이 나갔습니다</p>
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
    font-size: 12px;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
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
