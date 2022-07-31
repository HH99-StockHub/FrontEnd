import React from "react";
import { Helmet } from "react-helmet";
import ogImg from "../image/kakao.webp";
const HelmetComponents = React.memo(({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        property="og:title"
        content={`StockHub ${title}`}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="방구석 애널리스트 Stock Hub"
        data-react-helmet="true"
      />
      <meta property="og:image" content={ogImg} data-react-helmet="true" />
    </Helmet>
  );
});

export default HelmetComponents;
