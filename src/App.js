import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WaitingRoomPage from "./pages/WaitingRoomPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wait" element={<WaitingRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
