# [StockHub] 
![카카오배너](https://user-images.githubusercontent.com/97582834/182103465-5b03ff2a-89b1-41de-b333-a0f40b70f83f.jpg)




## 📆 프로젝트 소개
Web Site https://stockhub.co.kr/

Stock Hub는 내가 선택한 종목에 대한 매수 의견을 공유하는 장소입니다.
다른 사용자들로부터 게시글에 대한 평가를 받는 것은 물론, 게시글 작성 시점부터의 수익률도 보여줘요!
사고 싶은 종목이 있는데, 내 생각이 맞는지 확신이 없다면 Stock Hub의 고수들에게 검증을 받아보시죠!
숨어있던 방구석 애널리스트들이 마음껏 목소리를 내는 그날까지 화이팅입니다!

## 프로젝트 기간 및 환경 
2022/06/24 ~ 2022/08/05 <br/>
FrontEnd : React<br/>
BackEnd : SpringBoot<br/>


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
| Designer             |                                            |            |
| 이은지               |           momo1038@naver.com               | Designer   |


## 서비스 아키텍처
![image](https://user-images.githubusercontent.com/105052690/182089297-8820db66-92b1-4f2b-91cc-269ef61f8e9d.png)

## 와이어프레임
<details markdown="1">
<summary>피그마 </summary>
https://www.figma.com/file/xg1wpWqkAv4cK4DIYlfHjV/%ED%95%AD%ED%95%B499_StockHub?node-id=0%3A1
</details>

## 팀 노션
<details markdown="1">
<summary>노션 </summary>
https://swift-pelican-d17.notion.site/StockHub-3192bde33d57493da00ff60d3f3645a3
</details>

## ⚙ 주요 기능
- **게시글 작성/삭제**: KOSPI/KOSDAQ 상장 주식을 한 가지 선택하여 그 주식에 대한 매수 의견을 게시
- **찬반 투표**: 타인의 게시글에 대해 찬성/반대의 투표를 행사 또는 수정행사 가능
- **댓글 작성/삭제**
- **수익률 기록**: 게시글이 작성 시점부터 게시글 조회 시점까지의 수익률을 표시
- **기사 표시**: 게시글 해당 종목명으로 검색했을 때 나오는 네이버 기사를 표시
- **모아보기**: 본인 및 타 유저의 게시글을 모아보기
- **게시글 검색** : 해당 키워드가 들어간 게시글 검색 기능 ( 띄어쓰기로 중복 검색어 입력 가능 )
- **인기글 게시판 등록**: 1) 3표 이상의 찬성 표를 획득 + 2) 2배수 이상의 찬성/반대 비율 달성
- **수익왕 게시판 등록**: 5% 이상의 수익률 달성
- **타임 리미트**: 수익률 기록을 일정 기간 후에 멈추는 기능 (2주, 1개월, 3개월, 6개월, 1년, 2년, 3년)
- **목표 수익률**: 게시글 작성 시 목표수익률 설정 (+10%, +20%, + 30%, +50%, +100%, +150%, +200%)
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
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=pink">
  <img src="https://img.shields.io/badge/react query-61DAFB?style=for-the-badge&logo=reactquery&logoColor=FF4154">
  <img src="https://img.shields.io/badge/recoil-F7A81B?style=for-the-badge&logo=route53&logoColor=white"><br>
  <img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazons3&logoColor=green">
<img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=github actions&logoColor=white">
  <img src="https://img.shields.io/badge/cloudfront-04ACE6?style=for-the-badge&logo=cloudfront&logoColor=white">
<img src="https://img.shields.io/badge/route 53-F7A81B?style=for-the-badge&logo=route53&logoColor=white">
  <div/>

## 🔥  Trouble Shooting
<details markdown="1">
<summary>이슈 </summary>
https://github.com/HH99-StockHub/FrontEnd/issues/1 게시글 작성에서 작성 포인트를 삭제하면 그 하위 작성 포인트 가 초기화 되는 이슈<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/6 주식 종목 선택 시 드롭다운 항목을 키보드 방향키로 선택 할 수 있도록 <br/>
https://github.com/HH99-StockHub/FrontEnd/issues/11 KaKao 로그인 시 로그인 요청을 2번 하는 이슈<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/37 특정 submit 이벤트 시 useQuery 실행하기<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/49 상세페이지에서 게시글 삭제버튼이 자신이 쓴 글이면 true로 바꿔 화면에 보이게하고<br/>
다른 사람의 글이면 false로 바꿔 게시글 삭제 버튼이 화면에 안보이게 하기<br/>
https://github.com/HH99-StockHub/FrontEnd/issues/122 도메인 주소와 S3 주소에 버전이 다른 이슈
</details>

## 👀  FE 컨벤션
<details markdown="1">
<summary>WIKI</summary>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-:-Git-Flow Git-Flow<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-:-%EC%BD%94%EB%93%9C-%EC%BB%A8%EB%B2%A4%EC%85%98 FE 코드 컨벤션<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/FE-%ED%9A%8C%EC%9D%98%EB%A1%9D FE 회의록<br/>
https://github.com/HH99-StockHub/FrontEnd/wiki/%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88%EC%99%80-%EC%86%8C%ED%86%B5 디자이너님과의 회의<br/>

</details>



