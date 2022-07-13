//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
//컴포넌트
import MainPage from "./page/MainPage";
import Header from "./repeat/Header";
import TotalArticle from "./page/TotalArticle";
import AddArticle from "./page/AddArticle";
import DetailArticle from "./page/DetailArticle";
import OAuth from "./components/KakaoLogin/OAuth";
//CSS
import GlobalStyle from "./elem/GlobalStyle";
import AddArticleFixBtn from "./components/AddArticle/AddArticleFixBtn";
import SearchArticle from "./page/SearchArticle";

function App() {
  // 게시글 작성 토글 관리
  const toggleState = useSelector((state) => state.toggle.toggleState);
  return (
    <div className="App">
      <GlobalStyle />
      {toggleState && <AddArticle />}
      <Header />
      <AddArticleFixBtn />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/total/:category/articles/:page"
          element={<TotalArticle />}
        />
        <Route path="/detail/article/:id" element={<DetailArticle />} />
        <Route path="/user/kakao/callback" element={<OAuth />} />
        <Route
          path="/search/article/:category/:keyword"
          element={<SearchArticle />}
        />
      </Routes>
    </div>
  );
}

export default App;
