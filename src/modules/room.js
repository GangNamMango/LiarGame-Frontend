import * as postAPI from "../api/post"; // api/posts 안의 함수 모두 불러오기
/* 액션 타입 */

const POST_MAKE_ROOM = "POST_MAKE_ROOM"; // 요청 시작
const POST_MAKE_ROOM_SUCCESS = "POST_MAKE_ROOM_SUCCESS"; // 요청 성공
const POST_MAKE_ROOM_ERROR = "POST_MAKE_ROOM_ERROR"; // 요청 실패

const POST_ENTER_ROOM = "POST_ENTER_ROOM"; // 요청 시작
const POST_ENTER_ROOM_SUCCESS = "POST_ENTER_ROOM_SUCCESS"; // 요청 성공
const POST_ENTER_ROOM_ERROR = "POST_ENTER_ROOM_ERROR"; // 요청 실패

const SETTING_ROOM = "SETTING_ROOM"; // 요청 시작
const SETTING_ROOM_SUCCESS = "SETTING_ROOM_SUCCESS"; // 요청 성공
const SETTING_ROOM_ERROR = "SETTING_ROOM_ERROR"; // 요청 실패

const UPDATEUSERS = "UPDATEUSERS"; // 요청 시작
const UPDATEUSERS_SUCCESS = "UPDATEUSERS_SUCCESS"; // 요청 성공
const UPDATEUSERS_ERROR = "UPDATEUSERS_ERROR"; // 요청 실패

const CHANGEPROFILE = "CHANGEPROFILE";
const CHANGEPROFILE_SUCCESS = "CHANGEPROFILE_SUCCESS";
const CHANGEPROFILE_ERROR = "CHANGEPROFILE_ERROR";

export const postMakeRoom =
  (nickName, getImg) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: POST_MAKE_ROOM }); // 요청이 시작됨
    try {
      const room = await postAPI.postMakeRoom(nickName, getImg); // API 호출
      dispatch({ type: POST_MAKE_ROOM_SUCCESS, room: room.data.data }); // 성공
      history.push(`/room?roomId=${room.data.data.gameRoom.roomId}`);
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
      dispatch({ type: POST_ENTER_ROOM_SUCCESS, room: room.data.data }); // 성공
      history.push(`/room?roomId=${roomId}`);
    } catch (e) {
      dispatch({ type: POST_ENTER_ROOM_ERROR, error: e }); // 실패
      alert(e.response.data.message);
    }
  };

export const settingRoom =
  (topic, timeLimit) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: SETTING_ROOM }); // 요청이 시작됨
    try {
      dispatch({
        type: SETTING_ROOM_SUCCESS,
        room: { topic: topic, timeLimit: timeLimit },
      }); // 성공
    } catch (e) {
      dispatch({ type: SETTING_ROOM_ERROR, error: e }); // 실패
    }
  };

export const changeCharacter =
  (character) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: CHANGEPROFILE }); //요청이 시작됨
    try {
      dispatch({
        type: CHANGEPROFILE_SUCCESS,
        room: { character: character },
      }); //성공
    } catch (e) {
      dispatch({ type: CHANGEPROFILE_ERROR, error: e }); //실패
    }
  };

export const updateUsers =
  (users) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: UPDATEUSERS }); // 요청이 시작됨
    try {
      dispatch({
        type: UPDATEUSERS_SUCCESS,
        user: users,
      }); // 성공
    } catch (e) {
      dispatch({ type: UPDATEUSERS_ERROR, error: e }); // 실패
    }
  };

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

export default function room(state = initialState, action) {
  switch (action.type) {
    case POST_MAKE_ROOM:
      return {
        ...state,

        isLoading: true,
        data: null,
        error: null,
      };
    case POST_MAKE_ROOM_SUCCESS:
      return {
        ...state,

        isLoading: false,
        data: action.room,
        error: null,
      };
    case POST_MAKE_ROOM_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };

    case POST_ENTER_ROOM:
      return {
        ...state,

        isLoading: true,
        data: null,
        error: null,
      };
    case POST_ENTER_ROOM_SUCCESS:
      return {
        ...state,

        isLoading: false,
        data: action.room,
        error: null,
      };
    case POST_ENTER_ROOM_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };

    case SETTING_ROOM:
      return {
        ...state,

        isLoading: true,
        error: null,
      };
    case SETTING_ROOM_SUCCESS:
      return {
        ...state,

        isLoading: false,
        data: {
          ...state.data,
          gameRoom: {
            ...state.data.gameRoom,
            setting: {
              ...state.data.gameRoom.setting,
              topic: action.room.topic,
              timeLimit: action.room.timeLimit,
            },
          },
        },
        error: null,
      };
    case SETTING_ROOM_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
    case CHANGEPROFILE:
      return {
        ...state,

        isLoading: true,
        error: null,
      };
    case CHANGEPROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          gameRoom: {
            ...state.data.gameRoom,
            users: state.data.gameRoom.users.map((u, i) => {
              //캐릭터 변경한 user id로 user를 찾아내서 character값 변경하는 로직
            }),
          },
        },
      };
    case CHANGEPROFILE_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };

    case UPDATEUSERS:
      return {
        ...state,

        isLoading: true,
        error: null,
      };
    case UPDATEUSERS_SUCCESS:
      return {
        ...state,

        isLoading: false,
        data: {
          ...state.data,
          gameRoom: {
            ...state.data.gameRoom,
            users: action.user,
          },
        },
        error: null,
      };
    case UPDATEUSERS_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
