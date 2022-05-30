import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";
import ResultPage from "./pages/ResultPage";
import GamePage2 from "./pages/GamePage2";
import { useDispatch, useSelector } from "react-redux";
import { changeCharacter, countDown, result, settingRoom, startGame, updateUsers, vote } from "./modules/room";
import SockJs from "sockjs-client";
import StompJs from "stompjs";


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
