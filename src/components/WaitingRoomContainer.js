import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Navigation from "./Navigation";
import Setting from "./Setting";
import Character from "./Character";
import CharaterImg from "../data/character";

const Wrap = styled.div`
  position: relative;
  width: 100vh;
  max-width: 390px;
  height: 100vh;
  background: #0f0c13;
  margin: 0 auto;
`;

const RoomInfo = styled.div`
  display: flex;
  height: 5%;
  margin-bottom: 5%;
  text-align: center;

  .text,
  .number {
    margin: auto;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #54b5c2;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  padding: 0 5%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;

  position: relative;
  overflow-y: scroll;

  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaitingRoomContainer = () => {
  var [PopUp, setPopUp] = useState(false);

  function OnclickPopUp() {
    setPopUp(!PopUp);
  }

  return (
    <Wrap>
      <Navigation PopUp={PopUp} OnclickPopUp={OnclickPopUp} />

      {PopUp ? (
        <Setting></Setting>
      ) : (
        <>
          <RoomInfo>
            <span className="text">방 코드</span>
            <span className="number">0000</span>
          </RoomInfo>
          <Content>
            {CharaterImg.map((img) => (
              <Character
                key={img.id}
                src={img.image}
                width="100px"
                height="100px"
                nickName={img.nickName}
              />
            ))}
          </Content>
        </>
      )}

      <Footer>
        {PopUp ? <Button value="확인" /> : <Button value="게임 시작" />}
      </Footer>
    </Wrap>
  );
};

export default WaitingRoomContainer;
