# [StockHub] 
![KakaoTalk_20220729_160912463](https://user-images.githubusercontent.com/105052690/181703671-b380ca2e-bc55-418a-a9f2-7264d4a77f25.jpg)



## 📆 프로젝트 기간
2022/06/24 ~ 2022/08/05 <br/>
배포 2022/07/29 완료

## 팀원소개
| Name                 | GitHub / Contact                          | Position    |
| -------------------- | --------------------------------------    | ----------- |
| Frontend Github Link | https://github.com/HH99-StockHub/FrontEnd 
| 박태형VL             |  https://github.com/bigtae1007             | FE / React  |
| 정신영               | https://github.com/sinyoung12              | FE / React  |
| Backend Github Link  | https://github.com/HH99-StockHub/BackEnd  |
| 조한울L              | https://github.com/gaius365                | BE / Spring |
| 문준호               | https://github.com/mjoonho                 | BE / Spring |
| 주 희                | https://github.com/Joo-hui                 | BE / Spring |
| Designer             |                                            | Designer   |
| 이은지               |                                            |            |


## 서비스 아키텍처


## ⚙ 주요 기능
- **게시글 작성/삭제**: KOSPI/KOSDAQ 상장 주식을 한 가지 선택하여 그 주식에 대한 매수 의견을 게시
- **찬반 투표**: 타인의 게시글에 대해 찬성/반대의 투표를 행사 또는 수정행사 가능
- **댓글 작성/삭제**
- **수익률 기록**: 게시글이 작성 시점부터 게시글 조회 시점까지의 수익률을 표시
- **기사 표시**: 게시글 해당 종목명으로 검색했을 때 나오는 네이버 기사를 표시
- **모아보기**: 본인 및 타 유저의 게시글을 모아보기
- **인기글 게시판 등록**: 1) 3표 이상의 찬성 표를 획득 + 2) 2배수 이상의 찬성/반대 비율 달성
- **수익왕 게시판 등록**: 5% 이상의 수익률 달성
- **목표수익률**: 게시글 작성 시 목표수익률 설정 (+10%, +20%, + 30%, +50%, +100%, +150%, +200%)
- **메인 배너**: 종합 주가 지수 정보를 배너에 흐르는 형태로 게시
- **주가 차트**: 게시글 해당 종목의 1년치 선차트, 일봉차트 표시
- **랭크 시스템**: 게시글/댓글 작성 실적과 인기글 달성 업적을 점수화 해서 랭크 시스템을 적용 (신입 0점 - 초보 10점 - 중수 100점 - 고수 200점 - 지존 500점 / 게시글 작성 +30점, 댓글 작성 +5점, 인기글 달성 +50점)
- **알림 기능**: 인기글/수익왕 달성, 댓글, 찬반투표 등에 대한 알림
- **채팅방**: 로그인한 유저들끼리 토론할 수 있는 채팅방

## 기술스택

#### :boom: Frontend
<div>
<img src="https://img.shields.io/badge/axios-1877F2?style=flat&logo=ssockjs&logoColor=white">
<img src="https://img.shields.io/badge/sockjs-1877F2?style=flat&logo=ssockjs&logoColor=white">
<img src="https://img.shields.io/badge/stomp-1877F2?style=flat&logo=stomp&logoColor=white">
<img src="https://img.shields.io/badge/ApexChart-1877F2?style=flat&logo=ApexChart&logoColor=white"><br/>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <br> 
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=pink">
  <img src="https://img.shields.io/badge/reactquery-61DAFB?style=for-the-badge&logo=reactquery&logoColor=FF4154">
  <img src="https://img.shields.io/badge/recoil-F7A81B?style=for-the-badge&logo=route53&logoColor=white"><br>
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=green">
<img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=github actions&logoColor=white">
  <img src="https://img.shields.io/badge/cloudfront-04ACE6?style=for-the-badge&logo=cloudfront&logoColor=white">
<img src="https://img.shields.io/badge/route53-F7A81B?style=for-the-badge&logo=route53&logoColor=white">
  <div/>

## 🔥  Trouble Shooting
<details markdown="1">
<summary>이슈 </summary>
https://github.com/HH99-StockHub/FrontEnd/issues/1 게시글 작성에서 작성 포인트를 작성하고 중간에 내용을 삭제하면 그 하단부는 다 초기화 되는 현상<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/6 네이버 검색처럼 주식 종목 선택할 때 방향키로 선택할 수 있게 만들기<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/11 KaKao 로그인 시 useQuery 두번 요청<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/37 게시글 검색 버튼을 클릭했을 때 useQuery 실행하기<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/49 상세페이지에서 게시글 삭제버튼이 자신이 쓴 글이면 true로 바꿔 화면에 보이게하고<br/>
다른 사람의 글이면 false로 바꿔 게시글 삭제 버튼이 화면에 안보이게 하기<br/>
</details>

## 👀  FE 컨벤션
<details markdown="1">
<summary>WIKI</summary>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-:-Git-Flow Git-Flow<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-:-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98 FE 코드 컨벤션<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-%ED%9A%8C%EC%9D%98%EB%A1%9D FE 회의록<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%99%80-%EC%86%8C%ED%86%B5 디자이너님과의 회의<br/>

</details>



