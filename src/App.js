import { Route, Routes } from 'react-router-dom';
import './App.css';
import Room from './components/Room';
import MainPage from './pages/MainPage';

function App() {
  return (
      <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<MainPage/>}/>
      <Route path={`${process.env.PUBLIC_URL}/room/:pw`} element={<Room/>}/>
      </Routes>
  );
}

export default App;
