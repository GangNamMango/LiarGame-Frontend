import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft, HiCog } from "react-icons/hi";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15%;
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
  }
`;

const Navigation = ({ PopUp, OnclickPopUp, sendLeave, OnclickCharacter }) => {
  const onToggle = () => {
    OnclickPopUp();
  };
  const onToggle2 = () => {
    OnclickCharacter();
  };
  return (
    <Nav>
      <Link to={"/"}>
        <Menu className={PopUp ? "hidden" : ""} onClick={() => sendLeave()}>
          <HiArrowNarrowLeft className="icon" />
        </Menu>
      </Link>
      <Menu onClick={onToggle2}>
        <HiCog className="icon" />
      </Menu>
      <Menu onClick={onToggle}>
        <HiCog className="icon" />
      </Menu>
    </Nav>
  );
};

export default Navigation;
