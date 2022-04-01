import React from "react";
import styled from "styled-components";
import { HiArrowNarrowLeft, HiCog } from "react-icons/hi";
import Button from "./Button";
import Character from "./Character";
import CharaterImg from "../data/character";

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
  height: 230px;
`;
const Nav = styled.div`
  position: relative;
  height: 100px;
`;

const Menu = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 40px;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .icon {
    color: #54b5c2;
    width: 3em;
    height: 3em;
  }
`;

const RoomInfo = styled.div`
  display: flex;

  position: relative;
  height: 100px;

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
  height: 450px;
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
  return (
    <Wrap>
      <Header>
        <Nav>
          <Menu style={{ float: "left" }}>
            <HiArrowNarrowLeft className="icon" />
          </Menu>
          <Menu style={{ float: "right" }}>
            <HiCog className="icon" />
          </Menu>
        </Nav>
        <RoomInfo>
          <span style={{ margin: "0 5%" }}>방 코드</span>
          <span style={{ fontWeight: "500", fontSize: "50px", margin: "0 5%" }}>
            number
          </span>
        </RoomInfo>
      </Header>
      <Content>
        {CharaterImg.map((img) => (
          <Character
            key={img.id}
            src={img.image}
            width="150px"
            height="150px"
            nickName={img.nickName}
          />
        ))}
      </Content>
      <Footer>
        <Button value="게임 시작"></Button>
      </Footer>
    </Wrap>
  );
};

export default WaitingRoomContainer;
