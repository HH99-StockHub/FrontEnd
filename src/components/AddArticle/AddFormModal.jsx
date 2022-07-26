import React from "react";
import ReactModal from "react-modal";
import { useRecoilValue } from "recoil";
import AddArticle from "../../page/AddArticle";
// 모듈
import { addArticleState } from "../../state/client/modal";

const AddFormModal = () => {
  const addModalState = useRecoilValue(addArticleState);

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
          background: "#fff",
          maxWidth: "700px",
          width: "80%",
          height: "90%",
          margin: "0 auto",
        },
      }}
    >
      <AddArticle />
    </ReactModal>
  );
};

export default AddFormModal;
