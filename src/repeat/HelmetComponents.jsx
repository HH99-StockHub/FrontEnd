import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponents = React.memo(({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        property="og:title"
        content={`Stock Hub ${title}`}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content="방구석 애널리스트 Stock Hub"
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWfP8tjfyfgjWvA4qRXaee-4hJuAlN8Sy7Gg&usqp=CAU"
        data-react-helmet="true"
      />
    </Helmet>
  );
});

export default HelmetComponents;
