import React from "react";
import MainContainer from "../components/MainContainer";
import NavContainer from "../components/NavContainer";
import GlobalStyle from "../GlobalStyles";

const MainPage = () => {
    return(
        <>
            <NavContainer/>
            <MainContainer/>
            <GlobalStyle/>
        </>
    )
}

export default MainPage;