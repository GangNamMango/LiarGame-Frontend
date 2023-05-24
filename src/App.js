import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
import ResultPage from "./pages/ResultPage";
import GameStartPage from "./pages/GameStartPage"


function App() {
  

  return (
    <div>
      <Route path="/" component={MainPages} exact={true}/>
      <Route path="/room" component={WaitingRoomPage} />
      <Route path="/game" component={GameStartPage}/>
      <Route path="/result" component={ResultPage}/>
    </div>
  );
}

export default App;
