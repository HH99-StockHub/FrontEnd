//패키지 > 컴포넌트 > 커스텀 훅, CSS 컴포넌트 > 모듈(action creator) > CSS
import React from "react";
import { Link } from "react-router-dom";

const ArticleHeader = React.memo(({ title, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/${link}`}>
        <button> + 더보기</button>
      </Link>
    </div>
  );
});
export default ArticleHeader;
