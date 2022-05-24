import { combineReducers } from "redux";
import popup from "../modules/popup";
import room from "../modules/room";
<<<<<<< HEAD
import characterpop from "../modules/character";
=======
import  characterpop  from "../modules/character";
>>>>>>> SW
import { persistReducer } from "redux-persist"; // 추가
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["room"],
};

const rootReducer = combineReducers({
  popup,
  room,
  characterpop,
});

export default persistReducer(persistConfig, rootReducer);
