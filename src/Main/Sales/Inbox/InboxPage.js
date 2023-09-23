import React, { useEffect, useState } from "react"
import "./InboxPage.scss"
import { Link } from "react-router-dom"
import axios from "axios"

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])

  useEffect(() => {
    getAllLead()
  }, [])

  const data = [
    { id: 1, name: "Lead 1", link: "Client 1" },
    { id: 2, name: "Lead 2", link: "client 2" },
    { id: 3, name: "Lead 3", link: "Client 3" },
    { id: 4, name: "Lead 4", link: "Client 4" },
  ]

  const getAllLead = async () => {
    const allLead = await axios.get(`/v1/lead/getAllLead?userId=${1}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })

    console.log("all Lead data", allLead.data)
    setAllLeadData(allLead.data)
  }

  // http://localhost:8089/api/v1/lead/getAllLead?userId=1

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
              <th scope="col">Mobile Number</th>
              <th scope="col">Email</th>
              <th scope="col">Created</th>
              <th scope="col">Description</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {allLeadData.map((lead, i) => (
              <tr key={i}>
                <td>{lead.id}</td>
                <td>
                  <Link to={`/erp/sales/${lead.id}`}>{lead.name}</Link>
                </td>
                <td>{lead.mobileNo}</td>
                <td>{lead.email}</td>
                <td>{lead.createDate}</td>
                <td>{lead.leadDescription}</td>
                <td>{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InboxPage
