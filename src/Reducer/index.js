import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { appendDataReducer } from "./appendDataReducer";
import { fetchDataReducer } from "./fetchDataReducer";
export const rootReducer = combineReducers({
  reducer,
  appendDataReducer,
  fetchDataReducer
});
