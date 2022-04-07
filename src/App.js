import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPages from "./pages/MainPages";
import WaitingRoomPage from "./pages/WaitingRoomPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPages />} />
        <Route path="/room" element={<WaitingRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
