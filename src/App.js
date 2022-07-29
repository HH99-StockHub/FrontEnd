//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
//컴포넌트
import MainPage from "./page/MainPage";
import Header from "./repeat/Header";
import TotalArticle from "./page/TotalArticle";
import DetailArticle from "./page/DetailArticle";
import OAuth from "./components/KakaoLogin/OAuth";
import SearchArticle from "./page/SearchArticle";
import MenuBtn from "./repeat/MenuBtn";
import Footer from "./repeat/Footer";
import AddFormModal from "./components/AddArticle/AddFormModal";
import NotFound from "./page/NotFound";

//CSS
import GlobalStyle from "./elem/GlobalStyle";
import "./CSS/toastify.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <AddFormModal />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/total/:category/articles/:page"
          element={<TotalArticle />}
        />
        <Route path="/detail/article/:id" element={<DetailArticle />} />
        <Route path="/user/kakao/callback" element={<OAuth />} />
        <Route
          path="/search/article/:category/:keyword/:page"
          element={<SearchArticle />}
        />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <MenuBtn />
      <Footer />
      <ToastContainer />
    </div>
  );
}
ReactModal.setAppElement("#root");
export default App;
