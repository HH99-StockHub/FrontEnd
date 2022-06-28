//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//리듀서

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
