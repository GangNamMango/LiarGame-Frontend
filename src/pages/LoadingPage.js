import React from "react";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../GlobalStyles";

const Wrap = styled.div`
  position: relative;
  width: 100vh;
  max-width: 390px;
  height: 100vh;
  background: #0f0c13;
  margin: 0 auto;
`;

const Text = styled.h1`
  text-align: center;
  font-size: 56px;
  line-height: 56px;
  color: #54b5c2;
  padding: 40px 0;
`;

const boxFade = keyframes`
100% { 
    transform: rotate(360deg);
}
`;

const Loading = styled.img`
  display: block;
  width: 300px;
  margin: 70px auto;
  animation: ${boxFade} 3s linear infinite;
  transform-origin: 50% 50%;
`;

const LoadingPage = () => {
  return (
    <div>
      <GlobalStyle />
      <Wrap>
        <Text>GAME</Text>
        <Loading type="image" src="/img/loading.png"></Loading>
        <Text>START</Text>
      </Wrap>
    </div>
  );
};

export default LoadingPage;
