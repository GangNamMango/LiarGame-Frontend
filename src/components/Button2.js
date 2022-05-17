import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 195px;
  height: 55px;
  margin: 0 auto;
  position:absolute;
  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transform: translateY(550px);
  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;

color: #53A6C8;
cursor: pointer;
  color: #54b5c2;

  & + & {
    margin-top: 2rem;
  }
  @media screen and (max-width:500px){
    transform: translateY(450px);
  }
`;

const Button2 = ({ value,OnClickChangeProfile}) => {
  
    function click2(e) {
        OnClickChangeProfile();
      }
  
  return <Btn onClick={click2}>{value}</Btn>;
};

export default Button2;
