import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';

function App() {
  return (
    <div className="App">
      <h1>Close.io</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
