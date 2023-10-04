import React, { useEffect, useState } from "react"
import "./LeadsModule.scss"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import AllLeadsDisplay from "./AllLeadsDisplay"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import DataTableFirst from "../../../components/DataTableFirst"
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import DataGridNewTable from "../../../components/DataGridNewTable"

const LeadsModule = () => {
  const [activeTab, setActiveTab] = useState(false)
  const [allLeadData, setAllLeadData] = useState([])
  const [leadUserNew, setLeadUserNew] = useState([])

  useEffect(() => {
    getAllLead()
    getAllLeadUser()
  }, [])

  const location = useLocation()
  const currentPath = location.pathname.split()
  const splitPath = currentPath[0].split("/")
  const currentUserId = Number(splitPath[2])

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


  const changeUserAssignee = (user) =>{
    console.log("user is selectd", user);

  }


  const changeLeadAssignee = async (id) => {
    console.log("id is call", id);

    
    try{
     await axios.put(`/leadService/api/v1/lead/updateAssignee?leadId=${id}&userId=${2}`,{
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
      console.log(`updateLeadAssignee is`)
    }catch(err){
      console.log(err)
    }
  }

  const getAllLeadUser = async () => {
    try {
      const allLeadUser = await axios.get(
        `/leadService/api/v1/users/getAllUser`
      )
      console.log("all User", allLeadUser.data)
      setLeadUserNew(allLeadUser.data)
    } catch (err) {
      console.log(err)
    }
  }

  console.log("New Lead user", leadUserNew)

  const getAllLead = async () => {
    try {
      const allLead = await axios.get(
        `/leadService/api/v1/lead/getAllLead?userId=${1}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )

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

      {/* <DataTableFirst tabletitle={"Leads"} allleaddata = {fakeRow} leadColumns= {fakecolumn} /> */}
      <DataGridNewTable />

      <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile Numberfff</th>
              <th scope="col">Email</th>
              <th scope="col">Assignee</th>
              <th scope="col">update Assignee</th>
              <th scope="col">Description</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {allLeadData.map((lead, i) => (
              <tr key={i}>
                <td>{lead.id}</td>
                <td>
                  <Link to={`/erp/${currentUserId}/sales/${lead.id}`}>
                    {lead.name}
                  </Link>
                </td>
                <td>{lead.mobileNo}</td>
                <td>{lead.email}</td>
                <td>{lead.assignee.fullName}</td>
                <td>
                  <select className="assignee-button" onChange={(id)=> changeLeadAssignee(lead.id)} name="cars" id="cars">
                    {leadUserNew.map((user, index) => (
                        <option key={index} value={user.fullName} >{user.fullName}</option>
                      
                    ))}
                  </select>
                  
                </td>
                <td>{lead.assignee.email}</td>
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
