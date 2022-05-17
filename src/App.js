import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
import GamePage from "./pages/GamePage";
import VoteWaitPage from "./pages/VoteWaitPage";
import ResultPage from "./pages/ResultPage";
import GamePage2 from "./pages/GamePage2";

function App() {

  return (
    <div>
      <Route path="/" component={MainPages} exact={true}/>
      <Route path="/room" component={WaitingRoomPage} />
      <Route path="/game" component={GamePage2}/>
      <Route path="/result" component={ResultPage}/>
    </div>
  );
}

export default App;
