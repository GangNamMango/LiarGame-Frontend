import * as postAPI from "../api/post"; // api/posts 안의 함수 모두 불러오기
import { useHistory } from "react-router-dom";
/* 액션 타입 */

const POST_MAKE_ROOM = "POST_MAKE_ROOM"; // 요청 시작
const POST_MAKE_ROOM_SUCCESS = "POST_MAKE_ROOM_SUCCESS"; // 요청 성공
const POST_MAKE_ROOM_ERROR = "POST_MAKE_ROOM_ERROR"; // 요청 실패

const POST_ENTER_ROOM = "POST_MAKE_ROOM"; // 요청 시작
const POST_ENTER_ROOM_SUCCESS = "POST_MAKE_ROOM_SUCCESS"; // 요청 성공
const POST_ENTER_ROOM_ERROR = "POST_MAKE_ROOM_ERROR"; // 요청 실패

export const postMakeRoom =
  (nickName, getImg) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: POST_MAKE_ROOM }); // 요청이 시작됨
    try {
      const room = await postAPI.postMakeRoom(nickName, getImg); // API 호출
      history.push(`/room?roomId=${room.data.data.gameRoom.roomId}`);
      dispatch({ type: POST_MAKE_ROOM_SUCCESS, room: room.data.data }); // 성공
    } catch (e) {
      dispatch({ type: POST_MAKE_ROOM_ERROR, error: e }); // 실패
    }
  };

export const postEnterRoom =
  (roomId, nickName, getImg) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: POST_ENTER_ROOM }); // 요청이 시작됨
    try {
      const room = await postAPI.postEnterRoom(roomId, nickName, getImg); // API 호출
      console.log(room);
      history.push(`/room?roomId=${roomId}`);
      dispatch({ type: POST_ENTER_ROOM_SUCCESS, room: room.data.data }); // 성공
    } catch (e) {
      dispatch({ type: POST_ENTER_ROOM_ERROR, error: e }); // 실패
    }
  };
const initialState = {
  Rooms: {
    isLoading: null,
    data: null,
    error: null,
  },
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case POST_MAKE_ROOM:
      return {
        ...state,
        Rooms: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case POST_MAKE_ROOM_SUCCESS:
      return {
        ...state,
        Rooms: {
          isLoading: false,
          data: action.room,
          error: null,
        },
      };
    case POST_MAKE_ROOM_ERROR:
      return {
        ...state,
        Rooms: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case POST_ENTER_ROOM:
      return {
        ...state,
        Rooms: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case POST_ENTER_ROOM_SUCCESS:
      return {
        ...state,
        Rooms: {
          isLoading: false,
          data: action.room,
          error: null,
        },
      };
    case POST_ENTER_ROOM_ERROR:
      return {
        ...state,
        Rooms: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    default:
      return state;
  }
}
