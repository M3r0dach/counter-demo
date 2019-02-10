import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer";

const reducers = combineReducers({ counterState: counterReducer });
const store = createStore(reducers);
export default store;
