import axios from "axios";

const API_DOMAIN = "http://3.35.178.104";

export const postMakeRoom = (nickName, getImg) =>
  axios.post(`${API_DOMAIN}/game/room`, {
    nickname: nickName,
    character: getImg,
  });

export const postEnterRoom = (roomId, nickName, getImg) =>
  axios.post(`${API_DOMAIN}/game/enter`, {
    roomId: roomId,
    user: {
      nickname: nickName,
      character: getImg,
    },
  });

