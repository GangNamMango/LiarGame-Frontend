import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft, HiCog } from "react-icons/hi";
import { CgProfile} from "react-icons/cg";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  margin: 0 24px;
`;

const Menu = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  margin-top: 20px;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  .icon {
    position: absolute;
    color: #54b5c2;
    width: 3em;
    height: 3em;
    cursor: pointer;
  }
  p{
    position:absolute;
    width:100px;
    font-family: 'Gugi';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
top:55px;
left:-20px;
color: #53A6C8;
  }
`;


const Navigation = ({ CharacterPop,PopUp, OnclickPopUp, sendLeave, OnclickCharacter}) => {

  const onToggle = () => {
    OnclickPopUp();
  };
  const onToggle2 = () => {
    OnclickCharacter();
  };
  return (
    <Nav>
      <Link to={"/"}>
        <Menu className={PopUp || CharacterPop ? "hidden" : ""} onClick={() => sendLeave()}>
          <HiArrowNarrowLeft className="icon" />
        </Menu>
      </Link>

      <Menu className={PopUp ? "hidden" : ""} onClick={onToggle2}>
        <CgProfile className="icon" />
        <p>캐릭터 설정</p>
      </Menu>
      <Menu className={CharacterPop ? "hidden" : ""} onClick={onToggle}>
        <HiCog className="icon" />
      </Menu>
    </Nav>
  );
};

export default Navigation;
