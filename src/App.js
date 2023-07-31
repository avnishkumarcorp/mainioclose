import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Main/MainPage';
import DashBoard from './Main/DashBoard/DashBoard';
import HRMod from './Main/HR/HRMod';
import SalesMod from './Main/Sales/SalesMod';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/hr" element={ <HRMod /> } />
            <Route path="/sales" element={ <SalesMod /> } >
              <Route path="inbox"  element={ <div>sales outlet</div> } />
              <Route path="oppurtities" element={ <div>oppurtities</div> } />
              <Route path="estimate" element={ <div>estimate</div> } />
              <Route path="orders" element={ <div>orders</div> } />
              <Route path="contacts" element={ <div>comntacts</div> } />
              <Route path="leads" element={ <div>leads</div> } />
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
