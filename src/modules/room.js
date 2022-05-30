
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


const STARTGAME = "STARTGAME";
const STARTGAME_SUCCESS = "STARTGAME_SUCCESS";
const STARTGAME_ERROR = "STARTGAME_ERROR";

const COUNTDOWN = "COUNTDOWN";
const COUNTDOWN_SUCCESS = "COUNTDOWN_SUCCESS";
const COUNTDOWN_ERROR = "COUNTDOWN_ERROR";

const VOTE = "VOTE";
const VOTE_SUCCESS = "VOTE_SUCCESS";
const VOTE_ERROR = "VOTE_ERROR";

const RESULT = "RESULT";
const RESULT_SUCCESS = "RESULT_SUCCESS";
const RESULT_ERROR = "RESULT_ERROR";

const EXIT = "EXIT";
const EXIT_SUCCESS = "EXIT_SUCCESS";
const EXIT_ERROR = "EXIT_ERROR";

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
  async (dispatch, getState, {history}) => {
    dispatch({ type: CHANGEPROFILE}); //요청이 시작됨
    try {
      dispatch({
        type: CHANGEPROFILE_SUCCESS,
        room: {character: character},
      }); //성공
    } catch(e) {
      dispatch({ type: CHANGEPROFILE_ERROR,error: e}); //실패
    }
  }

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

  export const startGame = 
    (liarId) =>
    async (dispatch,getState,{history}) =>{
      dispatch({ type: STARTGAME});
      try{
        dispatch({
          type: STARTGAME_SUCCESS,
          room: liarId,
        });
        history.push(`/game`);
      } catch(e){
        dispatch({ type: STARTGAME_ERROR, error: e});
      }
    };

    export const countDown = 
    (gameStatus) => 
    async(dispatch,getState,{history}) =>{
      dispatch({ type: COUNTDOWN});
      try{
        dispatch({
          type: COUNTDOWN_SUCCESS,
          room: gameStatus,
        });
      } catch(e){
        dispatch({ type: COUNTDOWN_ERROR, error: e});
      }
    };

    export const vote = 
    (vote) =>
    async(dispatch,getState,{history}) =>{
      dispatch({ type: VOTE});
      try{
        dispatch({
          type: VOTE_SUCCESS,
          room: vote,
        });
        
      } catch(e){
        dispatch({ type: VOTE_ERROR, error: e});
      }
    };
    export const result =
    (result)=>
    async(dispatch,getState,{history}) =>{
      dispatch({type: RESULT});
      try{
        dispatch({
          type:RESULT_SUCCESS,
          room:result,
        });
        history.push('/result');
      }catch(e){
        dispatch({ type: RESULT_ERROR, error: e});
      }
    }




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
        return{
          ...state,
          isLoading:false,
          data: {
            ...state.data,
            gameRoom: {
              ...state.data.gameRoom,
              users: action.room.character,
            },
          },
          
          
        };
      case CHANGEPROFILE_ERROR:
        return{
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
    case STARTGAME:
      return {
        ...state,

        isLoading: true,
        error:null,
      };
    case STARTGAME_SUCCESS:
      return{
        ...state,

        isLoading: false,
        data: {
          ...state.data,
          gameRoom: {
            ...state.data.gameRoom,
            gameSet: {
              ...state.data.gameRoom.gameSet,
            liarId: action.room.liarId,
            topic: action.room.topic,
            word: action.room.word,
          }
          }
        },
        error: null,
      };
      case STARTGAME_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
      case COUNTDOWN:
        return {
          ...state,
          
          isLoading: true,
          error:null,
        };
      case COUNTDOWN_SUCCESS:
        return{
          ...state,
          isLoading: false,
          data: {
            ...state.data,
            gameRoom: {
              ...state.data.gameRoom,
              count: action.room.count,
              gameStatus: action.room.gameStatus,
              VoteSet: {
                ...state.data.gameRoom.VoteSet,
                maxVoteCount: action.room.maxVoteCount,
                currentVoteCount : action.room.currentVoteCount,
              }
            }
          },
          error: null,
        };
        case COUNTDOWN_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
      case VOTE:
        return {
          ...state,
  
          isLoading: true,
          error:null,
        };
        case VOTE_SUCCESS:
          return{
            ...state,
            isLoading: false,
            data: {
              ...state.data,
              gameRoom: {
                ...state.data.gameRoom,
                gameStatus: action.room.gameStatus,
                VoteSet: {
                  ...state.data.gameRoom.VoteSet,
                  maxVoteCount: action.room.maxVoteCount,
                  currentVoteCount : action.room.currentVoteCount,
                  completed: action.room.completed,
                  notCompleted: action.room.notCompleted,
                }
              }
            },
            error: null,
          };
      case VOTE_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
      case RESULT:
        return {
          ...state,
  
          isLoading: true,
          error:null,
        };
        case RESULT_SUCCESS:
          return{
            ...state,
            isLoading: false,
            data: {
              ...state.data,
              gameRoom: {
                ...state.data.gameRoom,
                gameStatus: action.room.gameStatus,
                ResultSet: {
                  ...state.data.gameRoom.ResultSet,
                  gameStatus: action.room.gameStatus,
                  liarName: action.room.liarName,
                  voteCount: action.room.voteCount,
                  winner : action.room.winner,
                  liarAnswer: action.room.liarAnswer,
                }
              }
            },
            error: null,
          };
      case RESULT_ERROR:
      return {
        ...state,

        isLoading: false,
        data: null,
        error: action.error,
      };
      case EXIT:
        return {
          ...state,
  
          isLoading: true,
          error:null,
        };
        case EXIT_SUCCESS:
          return{
            ...state,
            isLoading: false,
            data: {
              ...state.data,
              gameRoom: {
                ...state.data.gameRoom,
                users: action.user,
                gameStatus: action.room.gameStatus,
              },
            },
            error: null,
          };
      case EXIT_ERROR:
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

