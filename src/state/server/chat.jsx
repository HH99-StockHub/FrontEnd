import { atom } from "recoil";

export const saveChat = atom({
  key: "saveChat",
  default: [],
});

export const chatSubscribeId = atom({
  key: "chatSubscribeId",
  default: "sub-1",
});
