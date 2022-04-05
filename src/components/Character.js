import React from "react";
import styled from "styled-components";

const CharacterImg = styled.img`
  border: 4px solid #54b5c2;
  border-radius: 20px;

  cursor: pointer;
`;
const CharacterName = styled.div`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #b9b9b9;
`;

const Character = ({ src, width, height, nickName }) => {
  return (
    <div style={{ margin: "10px" }}>
      <CharacterImg src={src} width={width} height={height} />
      <CharacterName>{nickName}</CharacterName>
    </div>
  );
};

export default Character;
