import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainContainer.css";
import CharaterImg from "../data/character";
import styled from "styled-components";
import axios from "axios";

const MainContainer = () => {
  const [nickName, setNickName] = useState("");
  const [open, setOpen] = useState(false);
  const [Join, setJoin] = useState(false);
  const [getImg, setGetImg] = useState(4207576);

  const changeImg = (i) => {
    setGetImg(i);
  };

  const axiosRoom = async () => {
    try {
      const API_DOMAIN = "http://3.35.178.104";
      const response = await axios.post(`${API_DOMAIN}/game/room`, {
        nickname: nickName,
        character: getImg,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = (e) => {
    setNickName(e.target.value);
  };
  const enterRoom = async () => {
    await axiosRoom();
  };
  return (
    <div className="Wrap">
      <div className="Container">
        <div className="Img_area" open={open} onClick={() => setOpen(!open)}>
          <img src={"/img/character-" + getImg + ".png"} />
        </div>
        <div className={Join ? "Join" : "hidden"}>
          <h1 className="title Blue">방코드</h1>
          <input className="code_text" type="text" maxLength={10} />
          <p className="Blue" open={Join} onClick={() => setJoin(!Join)}>
            입장하기
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
            onChange={onChange}
          />
        </div>
        <div className="Btn">
          <ul>
            <li>
              <Link to={"/room"}>
                <span className="Blue" onClick={enterRoom}>
                  방만들기
                </span>
              </Link>
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
