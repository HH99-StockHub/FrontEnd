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

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SlideStock />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/total/:category/articles/:page"
          element={<TotalArticle />}
        />
        <Route path="/add/article" element={<AddArticle />} />
        <Route path="/detailarticle" element={<DetailArticle />} />
        <Route path="/user/kakao/callback" element={<OAuth />} />
      </Routes>
    </div>
  );
}

export default App;
