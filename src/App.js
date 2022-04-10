import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";

function App() {
  return (
    <div>
      <Route path="/" component={MainPages} exact={true} />
      <Route path="/room" component={WaitingRoomPage} />
    </div>
  );
}

export default App;
