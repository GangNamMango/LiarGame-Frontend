import { createGlobalStyle } from "styled-components";
import MainContainer from "../components/MainContainer";

const GlobalStyle = createGlobalStyle`
  body{
    position: relative;
    width: 390px;
    height: 844px;
    margin: 0 auto;
    background: #0F0C13;
  }`;
function MainPage() {
  return (
    <>
      <GlobalStyle />
      <MainContainer />
    </>
  );
}

export default MainPage;
