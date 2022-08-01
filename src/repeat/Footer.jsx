import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../src/image/Logo.svg";
import han from "../image/han.webp";
import ju from "../image/ju.webp";
import btae from "../image/btae.webp";
import sin from "../image/sin.webp";
import eun from "../image/eun.webp";
import moon from "../image/moon.webp";
const Footer = () => {
  return (
    <WrapFooter>
      <div>
        <WrapText>
          <Logo fill="#fff" width="111" height="20" />
          <div>
            <p>ABOUT US</p>
            <WrapImg>
              <div>
                <img src={han} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : BackEnd</p>
                  <p>
                    <span>한울</span> : "I am Groot!!!"
                  </p>
                </div>
              </div>
              <div>
                <img src={ju} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : BackEnd</p>
                  <p>
                    <span>주 희</span> : "슈렉 옆에 초라한 내 모습"
                  </p>
                </div>
              </div>
              <div>
                <img src={btae} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : FrontEnd</p>
                  <p>
                    <span>태형</span> : "슈렉은 초록색
                    <br /> 내 주식은 파란색...."
                  </p>
                </div>
              </div>
              <div>
                <img src={moon} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : BackEnd</p>
                  <p>
                    <span>준호</span> : "왜 또 아픈 상처에 소금을 뿌리십니까.
                    제게도 떡상의 꿈은 있었습니다."
                  </p>
                </div>
              </div>
              <div>
                <img src={sin} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : FrontEnd</p>
                  <p>
                    <span>신영</span> : "어부아저씨 코딩....죽여줘..."
                  </p>
                </div>
              </div>
              <div>
                <img src={eun} alt="팀원 프로필 이미지" />
                <div>
                  <p> Position : Design</p>
                  <p>
                    <span>은지</span> : "머물게하는 디자인"
                  </p>
                </div>
              </div>
            </WrapImg>
          </div>
        </WrapText>
        <WrapBtn>
          <button
            onClick={() => {
              window.open("https://forms.gle/3KLpd9LL1LH2Lq4X7", "_blank");
            }}
          >
            의견 보내기
          </button>
        </WrapBtn>
      </div>
    </WrapFooter>
  );
};

export default React.memo(Footer);
const WrapFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 136px;
  background-color: var(--gray3);
  @media screen and (max-width: 640px) {
    height: 290px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    width: 90%;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 42px;
      align-items: flex-start;
    }
  }
`;
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  > div {
    display: flex;
    gap: 17px;
    align-items: center;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;
    }
    > p {
      font-weight: 700;
      font-size: 14px;
      color: var(--white);
    }
  }
`;
const WrapImg = styled.div`
  @media screen and (max-width: 510px) {
    position: relative;
  }
  display: flex;
  gap: 12px;
  > div {
    @media screen and (min-width: 510px) {
      position: relative;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50%;
    > div {
      display: none;
    }
    &:hover {
      > div {
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: 10px;
        top: -115px;
        left: -70px;
        background-color: var(--white);
        width: 212px;
        height: 112px;
        font-size: 14px;
        border-radius: 6px;
        border: 1px solid var(--green2);
        @media screen and (max-width: 640px) {
          left: 0px;
        }
        @media screen and (max-width: 510px) {
          left: 50px;
        }
        > p:first-child {
          color: var(--gray3);
        }
        > p:nth-child(2) {
          span {
            color: var(--black);
          }
          color: var(--green1);
        }
      }
    }

    > img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: contain;
      background-color: var(--white);
    }
  }
`;
const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  button {
    width: 182px;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    background-color: var(--white);
  }
`;
