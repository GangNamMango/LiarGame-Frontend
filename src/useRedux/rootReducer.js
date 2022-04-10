import { combineReducers } from "redux";
import popup from "../modules/popup";
import post from "../modules/post";
import { persistReducer } from "redux-persist"; // 추가
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducer = combineReducers({
  popup,
  post,
});

export default persistReducer(persistConfig, rootReducer);
