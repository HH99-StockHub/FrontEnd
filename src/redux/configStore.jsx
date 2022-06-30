//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import toggle from "./modules/addArticle";
import user from "./modules/login";
//리듀서

const rootReducer = combineReducers({ toggle, user });
const store = createStore(rootReducer);

export default store;
