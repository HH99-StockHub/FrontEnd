import { atom } from "recoil";

export const addArticleState = atom({
  key: "addArticleState",
  default: false,
});

export const showChart = atom({
  key: "showChart",
  default: false,
});
