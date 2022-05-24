import React from "react";
import Hide from "../components/Game/Hide";

import GlobalStyle from "../GlobalStyles";
import GamePage from "./GamePage";
import LoadingPage from "./loadingPage";

class GamePage2 extends React.Component{
    state = {
        Loading: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({Loading: false});
        }, 1500);
    }
    render() {
        return <>{this.state.Loading ? <LoadingPage/>: <GamePage/>}</>
    }
}

export default GamePage2;
