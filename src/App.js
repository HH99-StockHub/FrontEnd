//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReactModal from "react-modal";
import { ToastContainer } from "react-toastify";
//컴포넌트
import MainPage from "./page/MainPage";
import Header from "./repeat/Header";
import TotalArticle from "./page/TotalArticle";
import AddArticle from "./page/AddArticle";
import DetailArticle from "./page/DetailArticle";
import OAuth from "./components/KakaoLogin/OAuth";
import ModalChart from "./components/Chart/ModalChart";
import SearchArticle from "./page/SearchArticle";
import AddArticleFixBtn from "./components/AddArticle/AddArticleFixBtn";

// 모듈
import { chartToggleState } from "./redux/modules/toggleState";
//CSS
import GlobalStyle from "./elem/GlobalStyle";
import "./CSS/toastify.css";

function App() {
  // 게시글 작성 토글 관리
  const toggleState = useSelector((state) => state.toggle.toggleState);
  const chartToggle = useSelector((state) => state.toggle.chartToggle);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <GlobalStyle />
      <ReactModal
        isOpen={toggleState}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            width: "720px",
            height: "900px",
            margin: "auto",
          },
        }}
      >
        <AddArticle />
      </ReactModal>
      <ReactModal
        isOpen={chartToggle}
        onRequestClose={() => {
          dispatch(chartToggleState(false));
        }}
        style={{
          overlay: {
            display: "flex",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            position: "absolute",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            outline: "none",
            margin: "auto",
            width: "900px",
            height: "500px",
          },
        }}
      >
        <ModalChart />
      </ReactModal>
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
      <ToastContainer />
    </div>
  );
}

export default App;
