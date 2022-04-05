import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Button from "./Button";

const SettingBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 650px;
  margin: 0 auto;
  padding: 5%;
  background: #0f0c13;
  border: 15px solid #201651;
  border-radius: 20px;
  align-items: center;
`;

const TextBox = styled.p`
  position: absolute;
  top: -10px;
  width: 195px;
  height: 50px;
  margin: 0 auto;
  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  font-size: 25px;
  font-weight: lighter;

  text-align: center;

  color: #54b5c2;
`;

const Box = styled.div`
  margin-top: 40%;
  padding: 5% 0;
  & + & {
    margin-top: 60%;
  }
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  color: #54b5c2;
`;

const Setting = () => {
  return (
    <div>
      <SettingBox>
        <TextBox>설정</TextBox>
        <Box>
          <Title>주제</Title>
          <Dropdown title="주제" />
        </Box>

        <Box>
          <Title>시간</Title>
          <Dropdown title="시간" />
        </Box>
      </SettingBox>
    </div>
  );
};

export default Setting;
