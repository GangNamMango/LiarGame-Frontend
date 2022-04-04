import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import Navigation from "./Navigation";
import Setting from "./Setting";
import Character from "./Character";
import CharaterImg from "../data/character";
import { PopUpStateContext } from "../Context";

const Wrap = styled.div`
  position: relative;
  width: 100vh;
  max-width: 390px;
  height: 100vh;
  background: #0f0c13;
  padding: 0 5%;
`;

const Header = styled.div`
  position: relative;
  height: 100px;
`;

const RoomInfo = styled.div`
  display: flex;

  position: relative;
  width: 100vh;
  height: 150px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  color: #54b5c2;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: space-around 
  position: relative;
  height: 550px;
  overflow: auto;
`;

const Footer = styled.div`
  position: relative;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WaitingRoomContainer = ({ number }) => {
  var PopUp = useContext(PopUpStateContext);

  return (
    <Wrap>
      <Header>
        <Navigation />
      </Header>
      <Content>
        {PopUp ? (
          <>
            <Setting></Setting>
          </>
        ) : (
          <>
            <RoomInfo>
              <span style={{ margin: "0 5%" }}>방 코드</span>
              <span
                style={{ fontWeight: "500", fontSize: "50px", margin: "0 5%" }}
              >
                0000
              </span>
            </RoomInfo>
            {CharaterImg.map((img) => (
              <Character
                key={img.id}
                src={img.image}
                width="150px"
                height="150px"
                nickName={img.nickName}
              />
            ))}
          </>
        )}
      </Content>
      <Footer>
        <Button value="게임 시작"></Button>
      </Footer>
    </Wrap>
  );
};

export default WaitingRoomContainer;
