import React, { useState, useContext } from "react";
import styled from "styled-components";
import { HiArrowNarrowLeft, HiCog } from "react-icons/hi";
import { PopUpStateContext, PopUPDispatchContext } from "../Context";

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

  .hidden {
    display: none;
  }
`;

const Navigation = () => {
  var PopUp = useContext(PopUpStateContext);
  const dispatch = useContext(PopUPDispatchContext);
  const onToggle = () => {
    dispatch({
      type: "PopUp",
    });
  };
  return (
    <Nav>
      <Menu className={PopUp ? "hidden" : ""} style={{ float: "left" }}>
        <HiArrowNarrowLeft className="icon" />
      </Menu>
      <Menu style={{ float: "right" }} onClick={onToggle}>
        <HiCog className="icon" />
      </Menu>
    </Nav>
  );
};

export default Navigation;
