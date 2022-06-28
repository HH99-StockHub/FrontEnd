//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
//컴포넌트
import MainPage from "./page/MainPage";
//CSS
import GlobalStyle from "./elem/GlobalStyle";
import TotalArticle from "./page/TotalArticle";
import AddArticle from "./page/AddArticle";
import DetailArticle from "./components/DetailArticle/DetailArticle";
import SlideStock from "./repeat/SlideStock";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SlideStock />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/total/:category/articles" element={<TotalArticle />} />
        <Route path="/add/article" element={<AddArticle />} />
        <Route path="/detailarticle" element={<DetailArticle />} />
      </Routes>
    </div>
  );
}

export default App;
