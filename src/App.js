import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';
import DashBoard from './Main/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} >
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/go" element={<div>go route</div>} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
