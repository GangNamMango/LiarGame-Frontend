import React, { useState } from "react";
import "./MainContainer.css";
import CharaterImg from "../data/character";
import { useDispatch } from "react-redux";
import { postMakeRoom, postEnterRoom } from "../modules/room";

const MainContainer = () => {
  const [nickName, setNickName] = useState("");
  const [open, setOpen] = useState(false);
  const [Join, setJoin] = useState(false);
  const [getImg, setGetImg] = useState(4207576);
  const [roomId, setRoomId] = useState("");

  const dispatch = useDispatch();

  const changeImg = (i) => {
    setGetImg(i);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const makeRoom = () => {
    if(nickName == ""){
      alert('닉네임을 설정해주세요');
      return;
    }
    else {dispatch(postMakeRoom(nickName, getImg));}
    
  };

  const enterRoom = () => {
    console.log("enter");
    console.log(roomId);
    if(nickName == ""){
      alert('닉네임을 설정해주세요');
      return;
    }
    else{dispatch(postEnterRoom(roomId, nickName, getImg));}
  };
  return (
    <div className="Wrap">
      <div className="Container">
        <div className="Img_area" open={open} onClick={() => setOpen(!open)}>
          <img src={"/img/character-" + getImg + ".png"} />
        </div>
        <div className={Join ? "Join" : "hidden"}>
          <h1 className="title Blue">방코드</h1>
          <input
            className="code_text"
            type="text"
            value={roomId}
            name="roomId"
            maxLength={10}
            onChange={onChangeRoomId}
          />
          <p
            className="Blue"
            open={Join}
            onClick={() => {
              enterRoom();
            }}
          >
            입장하기
          </p>
          <p className="Blue" onClick={()=>setJoin(!Join)}>
            취소
          </p>
        </div>
        <div className={open ? "Cha_select" : "hidden"}>
          <div className="title">캐릭터 설정</div>
          <div className="img_select">
            {CharaterImg &&
              CharaterImg.map((item) => (
                <ul className="img_ul">
                  <li onClick={() => changeImg(item.id)}>
                    <input
                      type="image"
                      src={item.image}
                      onClick={() => setOpen(!open)}
                    ></input>
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <div className="text_box">
          <input
            id="Nick_Name"
            type="text"
            name="nickname"
            maxLength={10}
            value={nickName}
            onChange={onChangeNickName}
          />
        </div>
        <div className="Btn">
          <ul>
            <li>
              <span className="Blue" onClick={makeRoom}>
                방만들기
              </span>
            </li>
            <li open={Join} onClick={() => setJoin(!Join)}>
              참여하기
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
