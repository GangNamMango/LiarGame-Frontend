import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 195px;
  height: 55px;
  margin: 0 auto;
  
  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transform: translateY(500px);
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #54b5c2;

  & + & {
    margin-top: 2rem;
  }
`;

const Button2 = ({ value,OnClickChangeProfile}) => {
  
    function click2(e) {
        OnClickChangeProfile();
      }
  
  return <Btn onClick={click2}>{value}</Btn>;
};

export default Button2;