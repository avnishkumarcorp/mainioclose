import React, { useState } from "react"
import "./InboxPage.scss"
import { Link } from "react-router-dom"

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState(false)

  const data = [
    { id: 1, name: "new name", link: "go to next" },
    { id: 2, name: "new name 2", link: "go to next 2" },
    { id: 3, name: "new name 3", link: "go to next 3" },
    { id: 4, name: "new name 4", link: "go to next 4" },
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
        <table className="table table-dark">
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
                  <Link to="/sales/1">{d.name}</Link>
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
