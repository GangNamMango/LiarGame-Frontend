import React from "react";

import GamePage from "./GamePage";
import LoadingPage from "./loadingPage";

class GamePageStartPage extends React.Component{
    state = {
        Loading: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({Loading: false});
        }, 1000);
    }
    render() {
        return <>{this.state.Loading ? <LoadingPage/>: <GamePage/>}</>
    }
}

export default GamePageStartPage;
