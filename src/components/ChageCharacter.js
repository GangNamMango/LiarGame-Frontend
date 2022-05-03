import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import StompJs from "stompjs";
import CharaterImg from "../data/character";
import "./MainContainer.css";

const Change = ({ setCharacter }) => {
  const Change = (i) => {
    setCharacter(i);
  };
  return (
    <div className="Cha_select">
      <div className="title">캐릭터 설정</div>
      <div className="img_select">
        <ul className="img_ul">
          <li>
            {CharaterImg &&
              CharaterImg.map((item) => (
                <input
                  className="Checked"
                  type="image"
                  src={item.image}
                  onClick={() => Change(item.id)}
                ></input>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Change;
