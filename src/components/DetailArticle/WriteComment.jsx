import React from "react";
import { api } from "../../shared/api";
import { useMutation, useQueryClient } from "react-query";

//댓글작성
const useWriteComment = ({ articleId }, payload) => {
  return api.post(`/articles/${articleId}/comment`, {
    comment: payload.comment,
  });
};

const WriteComment = () => {
  const Write_input = React.useRef("");

  const queryClient = useQueryClient();
  //댓글작성
  const { mutate } = useMutation(useWriteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries();
      Write_input.current.value = "";
    },
  });

  const Delete = ({ commentID }) => {
    mutate({ commentID });
  };

  if (WriteComment.isLoading) {
    return null;
  }

  return (
    <div>
      <input ref={Write_input} />
      <button
        onClick={() => {
          const data = { Write: Write_input.current.value };
          mutate(data);
        }}
      >
        추가해보자
      </button>
      <div>
        <button onClick={Delete}>삭제하기</button>
      </div>
    </div>
  );
};

export default WriteComment;
