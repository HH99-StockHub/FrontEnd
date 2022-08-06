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

<details markdown="1">
<summary>기술 스텍 선정 이유</summary>
  
* CloudFront
  * 가장 기본적인 이유는 https 환경으로 배포하기 위함입니다.
  * 국내 주가만 보여주는 만큼 프로젝트에 타겟은 국내 성인입니다. 따라서 CloudFront CDN 서비스가 꼭 필요한 프로젝트는 아니라 생각했습니다. 
그럼에도 CDN 서비스에 메리트가 있다는 점과 amplify , vercel 다양한 후보들 중 연결만 하면 자동으로 배포되는 환경과 다르게 github action을 이용해서 배포를 할 수 있다는 점에서 하나 더 학습해보고 싶다는 욕심으로 CloudFront를 선택하게 됐습니다.
  
* React-Query
  
  * 항해 전반적인 과정에서 사용했던 redux-thunk를 사용하지 않고, 새로운 기술 스택을 늘려보고 싶다는 욕심과 우하한테크세미나에서 React Query 영상을 보고 호기심을 갖게 됐습니다. 
  * 초반 기획 당시 실시간 주가 데이터 등 **실시간**을 목표로 하고 있었기 때문에, store에 저장하는 것이 아닌, 유연한 refetch를 사용할 수 있는 query가 적절하다고 생각했습니다. 
  
* Recoil
  
  * MVP 개발 당시에는 익숙한 Redux를 사용했습니다. 확실한 상태관리와 데이터 플로우를 그릴 수 있다는 장점이 있으면서, 보일러플레이트가 많다는 단점을 느꼈습니다. 
  * 프로젝트를 진행하면서 react-query를 이용하다보니 데이터 플로우의 장점이 사라졌고, 상태관리에 필요성 또한 적어졌습니다. 그래서 다른 라이브러리를 도입하기로 결심했습니다.
  * redux보다 가볍고 이 프로젝트에서 사용할 수 있는 라이브러리를 리서치하여 Context API, mobX, recoil 3개의 후보군을 발견했고, 코드 볼륨을 줄여보자는 1차적인 목표와, 프로젝트 기간을 고려했을 때 빠르게 습득하고 사용할 수 있어야 한다는 2차 목표에 부합하는 후보군 중 리액트 훅과 유사한 인터페이스를 보이며, Docs를 봤을 때 잘 정리된 것 같은 매력적인 느낌을 받아 recoil을 선택하게 됐습니다.
  
* styled componenent 
  * 디자이너도 포트폴리오를 위해 참여했는데, 개발 수준이 낮아 디자이너의 포트폴리오 질을 낮추면 안된다고 생각했습니다. 따라서 디자이너가 원하는 디자인과 효과를 가장 잘 표현하기 위해서는 익숙한 라이브러리를 사용하는 것이 적절하다고 생각했기에, 과정에서 가장 많이 사용하고 가장 익숙한 styled-compoenents를 선택했습니다. 
  
* ApexChart
  * 차트를 구현함에 있어서, CSS를 이용 또는 SVG를 학습해 직접 구현하는 방법을 고민했습니다. CSS만 이용하여 간단하게 막대와 금액표만을 작성했을 때 생각보다 많은 시간을 소요했고, hover시 주가 정보 보임 등 흔히 보이는 차트에 기능을 구현하기 위해서는 더 많은 시간이 필요했습니다. 그리고 다른 라이브러리에 기본 형태보다 이쁘지 못하다는 점도 문제가 됐습니다. 
  * 프로젝트의 완성도를 높이기 위해 라이브러리를 선택하게됐고, candle 차트와 line 차트를 둘다 제공하고, 커스텀이 가능한 라이브러리를 선택 기준으로 잡고 서치 과정에서 docs가 잘 되어있으며 많은 옵션으로 커스텀하기 편리한 ApexChart를 선택하게 됐습니다. 
  
* sockJS, stomp
  * 처음 시도해보는 기능적 도전이었기에, 관련된 소스가 많은 라이브러리를 선택하려고 했습니다. spring과 알림이나 채팅과 같은 텍스트 소켓 연결은 stomp를 많이 사용하며, 지원하지 않는 브라우저에 경우 SockJS로 연결하여 사용한다는 내용을 봤고, 대부분의 예제 등이 stomp와 sockjs로 구현한 것을 확인하여 선택했습니다. 
  
 * axios
  * 후보는 ajax, axios, fetch 3가지가 있었습니다. ajax는 Jquery를 사용할 때 정말 편하게 사용했지만, 순수 Ajax만을 사용할 때는 직관적이지 못하고 익숙하지 않아 제외했습니다. 
  * axios, fetch 둘 중에서 장 단점을 비교해 봤습니다. fetch는 브라우저에 내장되어 있기 때문에 따로 설치가 필요없고 axios에 비해 가볍다는 장점이 있엇고 axios는 자동으로 JSON데이터 형식으로 변환이 되며, 기본적으로 사용하기 더 편하고 기능이 많다는 장점이 있었습니다. 둘을 비교했을 때 react는 axios가 더 좋을 것 같다는 얘기도 많았고, 속도 차이에서 유의미한 크기에 차이가 있지 않은 결과를 보고, 익숙하고 사용하기 편한 axios를 선택했습니다.
  * 
  
</details>
  
  
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


## 유저 피드백 및 개선사항 

<details markdown="1">
  
<summary>개선사항</summary>
  
* 초기 배포 후에 게시글이 없을 경우 너무 횡해 보인다는 피드백이 있어, 텍스트로 이룬 카드를 넣어 여백을 채웠습니다. 
  ![gq](https://user-images.githubusercontent.com/97582834/183237173-5f376de9-0188-481b-951f-91807e25a6f2.JPG)

* 차트에서 날짜 구분이 힘들다는 피드백이 있어, 전년도 날짜에는 연도를 추가했습니다.
  ![h122](https://user-images.githubusercontent.com/97582834/183237198-22f97da9-c3be-4bf6-ad78-45104699c0d1.JPG)

* 게시글을 검색했을 때 내용이 없으면 안내 문구 하나만 나오고 화면이 빈화면이라 불편하다는 피드백이 있어, 추가 안내 페이지를 만들었습니다. 
  ![1234](https://user-images.githubusercontent.com/97582834/183237230-f07d3bfe-5098-4f14-933a-90f39fceef02.JPG)

* 게시글 삭제 시 실수로 눌렀는데 어떤 확인조치 없이 삭제되는 경우가 있어, 한번 더 확인하는 절차를 추가했습니다. 
  ![5123](https://user-images.githubusercontent.com/97582834/183237243-f130431c-a804-4b9e-ba0a-14df4985a3c6.JPG)


</details>
