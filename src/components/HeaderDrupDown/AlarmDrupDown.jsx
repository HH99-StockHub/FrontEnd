import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
// 훅
import { useAlarmMutate } from "../../repeat/useRepeatQuery";
// 모듈
import { alarmList } from "../../state/server/alarm";
// 이미지
import { ReactComponent as Notice } from "../../image/Notice.svg";
import { ReactComponent as XBtnSvg } from "../../image/XBtn.svg";

const AlarmDrupDown = () => {
  const navigate = useNavigate();
  /* 유저정보 모달창 */
  //드롭다운 메뉴
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const el = useRef();
  // 알림 데이터
  const alarmListData = useRecoilValue(alarmList);
  // 다른곳 클릭하면 토글창 닫기
  const handleCloseToggling = (e) => {
    if (el.current && !el.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  // 알림 확인
  const { mutate } = useAlarmMutate.useReadAlarmMutate();
  const readAlarm = (noticeId, articleId) => {
    // 읽음 삭제 및 해당 게시글 이동
    mutate(noticeId);
    navigate(`/detail/article/${articleId}`);
  };
  const deleteAlarm = (noticeId) => {
    mutate(noticeId);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseToggling);
    return () => {
      window.removeEventListener("click", handleCloseToggling);
    };
  }, []);

  return (
    <DropDownContainer ref={el}>
      <DropDownHeader>
        <button onClick={toggling}>
          <Notice />
        </button>
        {alarmListData.length !== 0 ? (
          alarmListData.length > 20 ? (
            <AlarmCount>+20</AlarmCount>
          ) : (
            <AlarmCount>{alarmListData.length}</AlarmCount>
          )
        ) : null}
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {alarmListData.length === 0 ? (
            <ListItem style={{ padding: "8px" }}>
              새로운 알림이 없습니다.
            </ListItem>
          ) : (
            <>
              {alarmListData.slice(0, 20).map((v) => {
                return (
                  <WrapList>
                    <div>
                      <span>{dayjs(v.createdAt).format("MM.DD")}</span>
                      <ListItem
                        key={v.noticeId}
                        onClick={() => {
                          readAlarm(v.noticeId, v.noticeArticleId);
                        }}
                      >
                        {v.noticeMessage}
                      </ListItem>
                    </div>
                    <button
                      onClick={() => {
                        deleteAlarm(v.noticeId);
                      }}
                    >
                      <XBtnSvg width="7.7" height="7.7" fill="#000" />
                    </button>
                  </WrapList>
                );
              })}
            </>
          )}
        </DropDownList>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  position: relative;
`;

const DropDownHeader = styled.div`
  position: relative;
`;
const AlarmCount = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
  width: 25px;
  height: 18px;
  border-radius: 99px;
  background-color: var(--pink2);
  font-size: 9px;
  color: var(--white);
  text-align: center;
`;
const DropDownList = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  max-height: 180px;
  width: 300px;
  background: #ffffff;
  border: 1px solid var(--gray1);
  border-radius: 6px;
  font-size: 12px;
  z-index: 50;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
const WrapList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 8px;
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    > span {
      color: var(--gray3);
    }
  }
`;
const ListItem = styled.p`
  cursor: pointer;
`;
export default AlarmDrupDown;
