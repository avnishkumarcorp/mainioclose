import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
