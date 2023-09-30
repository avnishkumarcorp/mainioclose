import React, { useEffect, useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import DataTableFirst from "../../../components/DataTableFirst"


const LeadsModule = () => {
  
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])

  useEffect(() => {
    getAllLead()
  }, [])

  const location = useLocation();
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const currentUserId = Number(splitPath[2]);

  console.log("id is ", currentUserId)

  console.log("all e")

  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "mobileNo",
      label: "Mobile",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "createDate",
      label: "create Date",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "leadDescription",
      label: "Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "source",
      label: "Source",
      options: {
        filter: true,
        sort: true,
      },
    },
  ]

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ]

  const options = {
    filterType: "checkbox",
  }




  const getAllLead = async () => {
    try {
      const allLead = await axios.get(`/leadService/api/v1/lead/getAllLead?userId=${1}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })

      console.log("all Lead data", allLead.data)
      setAllLeadData(allLead.data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="lead-module small-box-padding">
      <div className="inbox-top-btn">
        <button to="/sales" className={`tab-btn `}>
          Inbox
        </button>
        <button to="/sales2" className={`tab-btn `}>
          Done (25)
        </button>
        <button to="/sales3" className={`tab-btn `}>
          Failure (454545)
        </button>
      </div>

      <DataTableFirst tabletitle={"Leads"} allleaddata = {allLeadData} leadColumns= {columns} filterOptions={options} />


      <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile Numberfff</th>
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
                  <Link to={`/erp/${currentUserId}/sales/${lead.id}`}>{lead.name}</Link>
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

export default LeadsModule
