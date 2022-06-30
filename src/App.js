//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
//컴포넌트
import MainPage from "./page/MainPage";
import Header from "./repeat/Header";
import TotalArticle from "./page/TotalArticle";
import AddArticle from "./page/AddArticle";
import DetailArticle from "./components/DetailArticle/DetailArticle";
import SlideStock from "./repeat/SlideStock";
import OAuth from "./components/KakaoLogin/OAuth";
//CSS
import GlobalStyle from "./elem/GlobalStyle";
import { useSelector } from "react-redux";

function App() {
  // 게시글 작성 토글 관리
  const toggleState = useSelector((state) => state.toggle.toggleState);
  return (
    <div className="App">
      <GlobalStyle />
      {toggleState && <AddArticle />}
      <Header />
      <SlideStock />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/total/:category/articles/:page"
          element={<TotalArticle />}
        />
        <Route path="/detailarticle" element={<DetailArticle />} />
        <Route path="/user/kakao/callback" element={<OAuth />} />
      </Routes>
    </div>
  );
}

export default App;
