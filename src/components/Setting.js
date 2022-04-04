import React from "react";
import styled from "styled-components";
import Button from "./Button";

const SettingBox = styled.div`
  position: relative;

  width: 324px;
  height: 550px;
  background: #0f0c13;
  border: 15px solid #201651;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

const Setting = () => {
  return (
    <div>
      <SettingBox>
        <Button value="설정"></Button>
      </SettingBox>
    </div>
  );
};

export default Setting;
