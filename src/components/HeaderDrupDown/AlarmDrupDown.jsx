import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
// 모듈
import { alarmList } from "../../state/server/alarm";
// 이미지
import { ReactComponent as Notice } from "../../image/Notice.svg";
import { useAlarmMutate } from "../../repeat/useRepeatQuery";
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
  const deleteAlarm = (noticeId, articleId) => {
    // 읽음 삭제 및 해당 게시글 이동
    mutate(noticeId);
    navigate(`/detail/article/${articleId}`);
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
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {alarmListData.slice(0, 20).map((v) => {
              return (
                <ListItem
                  key={v.noticeId}
                  onClick={() => {
                    deleteAlarm(v.noticeId, v.noticeArticleId);
                  }}
                >
                  {v.noticeMessage}
                </ListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div``;

const DropDownHeader = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;
const DropDownListContainer = styled.div``;
const DropDownList = styled.div`
  position: absolute;
  padding: 10px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  z-index: 50;
  &:first-child {
    padding-top: 0.8em;
  }
`;
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;
export default AlarmDrupDown;
