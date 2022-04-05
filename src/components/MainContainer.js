import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Main = styled.div`
  position: relative;
  width: 100vh;
  max-width: 390px;
  height: 100%;
  background: #0f0c13;
  padding: 0 10%;
`;

const Menu = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 33px;
  top: 41px;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Character = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  left: 70px;
  top: 224px;

  background-size: contain;
  border: 4px solid #54b5c2;
  box-sizing: border-box;
  border-radius: 50px;

  cursor: pointer;
`;

const Form = styled.form`
  position: absolute;
  width: 250px;
  height: 46px;
  left: 70px;
  top: 509px;

  background: rgba(0, 0, 0, 0.45);
  border: 2px solid #6e6693;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  // filter: blur(4px);

  border-radius: 10px;
`;

const NickName = styled.input`
  position: absolute;
  width: 234px;
  height: 18px;
  left: 3px;
  top: 10px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;

  color: #757575;
  background-color: transparent;

  border: none;

  &:focus {
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  position: absolute;
  left: 97px;
  top: 643px;
  width: 195px;
`;

const MainContainer = () => {
  const [img, setImg] = useState(4207345);
  return (
    <Main>
      <Menu>
        <HiOutlineMenuAlt1
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            color: "#54B5C2",
            fontSize: "2.5em",
          }}
        />
      </Menu>
      <Character src={`/img/character-${img}.png`}></Character>
      <Form>
        <NickName />
      </Form>
      <ButtonGroup>
        <Button value="방 만들기"></Button>
        <Button value="참여하기"></Button>
      </ButtonGroup>
    </Main>
  );
};

export default MainContainer;
