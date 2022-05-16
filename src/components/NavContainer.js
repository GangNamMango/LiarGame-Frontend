import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./NavContainer.css";
const NavContainer = () => {
  const [popup, setPopup] = useState(false);
  const [game, setGame] = useState(false);
  const [htr, setHtr] = useState(false);
  const [htj, setHtj] = useState(false);
  const Button = styled.h1`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;

color: #53A6C8;
    color: #54b5c2;
    transition: none;
  `;
  return (
    <div className="Nav_area">
      <div
        className={popup ? "Nav_close" : "Nav_open"}
        popup={popup}
        onClick={() => setPopup(!popup)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div><img className="GameLogo" src="/img/GameName.png"/></div>
      <div className={popup ? "bg" : ""}></div>
      <div className={popup ? "popup_area" : "hidden"}>
        <div className={game ? "block" : "none"}>
          <Button onClick={() => setGame(!game)}>확인</Button>
        </div>
        <div className={htr ? "block" : "none"}>
          <div>
            <p>
              <span>1</span> 방 만들기 버튼을 클릭하세요
            </p>
          </div>
          <div>
            <p>
              <span>2</span> 대기실의 설정 아이콘을 클릭하세요
            </p>
          </div>
          <div>
            <p>
              <span>3</span> 게임 주제와 시간을 바꿔보세요
            </p>
          </div>
          <Button onClick={() => setHtr(!htr)}>확인</Button>
        </div>
        <div className={htj ? "block" : "none"}>
          <div>
            <p>
              <span>1</span> 대기실의 방 코드를 방장에게 요청하세요
            </p>
          </div>
          <div>
            <p>
              <span>2</span> 참여하기 버튼을 클릭하세요
            </p>
          </div>
          <div>
            <p>
              <span>3</span> 방코드를 입력하세요
            </p>
          </div>
          <Button onClick={() => setHtj(!htj)}>확인</Button>
        </div>
        <ul>
          <li
            className={game ? "Move_top" : ""}
            game={game}
            onClick={() => setGame(!game)}
          >
            게임방법
          </li>
          <li
            className={htr ? "Move_top" : ""}
            htr={htr}
            onClick={() => setHtr(!htr)}
          >
            방 만드는 법
          </li>
          <li
            className={htj ? "Move_top" : ""}
            htj={htj}
            onClick={() => setHtj(!htj)}
          >
            참여하는 법
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavContainer;
