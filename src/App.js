//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import { Route, Routes } from "react-router-dom";
//컴포넌트
import MainPage from "./page/MainPage";
//CSS
import GlobalStyle from "./elem/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
