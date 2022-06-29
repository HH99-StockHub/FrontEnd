//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import toggle from "./modules/addArticle";
//리듀서

const rootReducer = combineReducers({ toggle });
const store = createStore(rootReducer);

export default store;
