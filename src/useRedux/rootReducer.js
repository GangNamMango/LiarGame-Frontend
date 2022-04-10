import { combineReducers } from "redux";
import popup from "../modules/popup";
import post from "../modules/post";

const rootReducer = combineReducers({
  popup,
  post,
});

export default rootReducer;
