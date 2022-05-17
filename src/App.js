import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
import GamePage from "./pages/GamePage";
import VoteWaitPage from "./pages/VoteWaitPage";
import ResultPage from "./pages/ResultPage";

function App() {

  return (
    <div>
      <Route path="/" component={MainPages} exact={true}/>
      <Route path="/room" component={WaitingRoomPage} />
      <Route path="/game" component={GamePage}/>
      <Route path="/result" component={ResultPage}/>
    </div>
  );
}

export default App;
