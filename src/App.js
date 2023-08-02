import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainPage from "./Main/MainPage"
import DashBoard from "./Main/DashBoard/DashBoard"
import HRMod from "./Main/HR/HRMod"
import SalesMod from "./Main/Sales/SalesMod"
import InboxPage from "./Main/Sales/Inbox/InboxPage"
import Accounts from "./Main/Accounts/Accounts"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<DashBoard />} />
            {/* hr module routes */}
            <Route path="/hr" element={<HRMod />}>
              <Route path="" element={<div>hrlinkone</div>} />
              <Route path="hrlinktwo" element={<div>hrlinktwo</div>} />
              <Route path="hrlinkthree" element={<div>hrlinkthree</div>} />
              <Route path="hrlinkfour" element={<div>hrlinkfour</div>} />
              <Route path="hrlinkfive" element={<div>hrlinkfive</div>} />
              <Route path="hrlinksix" element={<div>hrlinksix</div>} />
            </Route>
            {/* end */}
            {/* slaes module routes */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="estimate" element={<div>estimate</div>} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
            {/* accounts module routes */}
            <Route path="/account" element={<Accounts />}>
              <Route path="" element={<div>accounts first page</div>} />
              <Route path="accounttwo" element={<div>account second page</div>} />
              <Route path="accountthird" element={<div>account third page</div>} />
              <Route path="accountforth" element={<div>account forth page</div>} />
              <Route path="accountfive" element={<div>Account five page</div>} />
              <Route path="accountsix" element={<div>Account six page</div>} />
            </Route>
            {/* end */}
            {/* operation module Routes */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="estimate" element={<div>estimate</div>} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
            {/* manage client module route */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="estimate" element={<div>estimate</div>} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
            {/* Activity Master module routes */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="estimate" element={<div>estimate</div>} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
            {/* quality module routes */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="estimate" element={<div>estimate</div>} />
              <Route path="orders" element={<div>orders</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
            {/* profile routes */}
            <Route path="/sales" element={<SalesMod />}>
              <Route path="" element={<InboxPage />} />
              <Route path="oppurtities" element={<div>oppurtities</div>} />
              <Route path="contacts" element={<div>comntacts</div>} />
              <Route path="leads" element={<div>leads</div>} />
            </Route>
            {/* end */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
