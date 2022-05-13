import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 195px;
  height: 55px;
  margin: 0 auto;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;

color: #53A6C8;
  color: #54b5c2;
  & + & {
    margin-top: 2rem;
  }
`;

const Button = ({ value, OnClick }) => {
  
  function click(e) {
    OnClick();
  }
  
  return <Btn onClick={click}>{value}</Btn>;
};

export default Button;
