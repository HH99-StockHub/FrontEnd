import React from "react";
import ReactModal from "react-modal";
import { useRecoilState } from "recoil";
import AddArticle from "../../page/AddArticle";
// 모듈
import { addArticleState } from "../../state/client/modal";

const AddFormModal = () => {
  const [addModalState] = useRecoilState(addArticleState);

  return (
    <ReactModal
      isOpen={addModalState}
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
          height: "800px",
          margin: "auto",
        },
      }}
    >
      <AddArticle />
    </ReactModal>
  );
};

export default AddFormModal;
