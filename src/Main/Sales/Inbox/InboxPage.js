import React, { useState } from "react"
import "./InboxPage.scss"
import { Link } from "react-router-dom"

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState(false)

  const data = [
    { id: 1, name: "Lead 1", link: "Client 1" },
    { id: 2, name: "Lead 2", link: "client 2" },
    { id: 3, name: "Lead 3", link: "Client 3" },
    { id: 4, name: "Lead 4", link: "Client 4" },
  ]

  return (
    <div className="inbox-page cm-padding-one">
      <div className="inbox-top-btn">
        <button to="/sales" className={`tab-btn `}>
          Inbox
        </button>
        <button to="/sales2" className={`tab-btn `}>
          Done (25)
        </button>
        <button to="/sales3" className={`tab-btn `}>
          Failure (45)
        </button>
      </div>

      {/* data table */}
      <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>
                  <Link to={`/erp/sales/${d.id}`}>{d.name}</Link>
                </td>
                <td>{d.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InboxPage
