import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
<<<<<<< HEAD
import LoadingPage from "./pages/LoadingPage";
=======
import GamePage from "./pages/GamePage";
import VoteWaitPage from "./pages/VoteWaitPage";
import ResultPage from "./pages/ResultPage";
import GamePage2 from "./pages/GamePage2";
>>>>>>> SW

function App() {

  return (
    <div>
      <Route path="/" component={MainPages} exact={true}/>
      <Route path="/room" component={WaitingRoomPage} />
<<<<<<< HEAD
      <Route path="/loading" component={LoadingPage} />
=======
      <Route path="/game" component={GamePage2}/>
      <Route path="/result" component={ResultPage}/>
>>>>>>> SW
    </div>
  );
}

export default App;
