import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <div>
      <Route path="/" component={MainPages} exact={true} />
      <Route path="/room" component={WaitingRoomPage} />
      <Route path="/room/game" component={GamePage}/>
    </div>
  );
}

export default App;
