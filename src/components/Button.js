import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 195px;
  height: 55px;
  margin: 0 auto;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #54b5c2;

  & + & {
    margin-top: 2rem;
  }
`;
const Button = ({ value }) => {
  return <Btn>{value}</Btn>;
};

export default Button;
