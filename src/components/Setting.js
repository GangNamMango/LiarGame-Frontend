import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Topics from "../data/topics";

const SettingBox = styled.div`
  height: 390px;

  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
  background: #0f0c13;
  border: 15px solid #201651;
  border-radius: 20px;
  align-items: center;
`;

const TextBox = styled.p`
  position: absolute;
  top: 110px;
  width: 195px;
  height: 40px;
  margin: 0 auto;
  background: #201651;

  border-radius: 10px;

  font-size: 25px;
  font-weight: lighter;

  text-align: center;

  color: #54b5c2;
`;

const Box = styled.div`
  margin-top: 10%;
  padding: 5% 0;
  & + & {
    margin-top: 30%;
  }
`;

const Title = styled.div`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  color: #54b5c2;
`;
const topics = Topics;
const timeLimits = [10, 20, 30];
const Setting = ({ setTopic, setTimeLimit }) => {
  return (
    <SettingBox>
      <TextBox>설정</TextBox>
      <Box>
        <Title>주제</Title>
        <Dropdown title="topic" data={topics} setState={setTopic} />
      </Box>

      <Box>
        <Title>시간</Title>
        <Dropdown title="timeLimit" data={timeLimits} setState={setTimeLimit} />
      </Box>
    </SettingBox>
  );
};

export default Setting;
