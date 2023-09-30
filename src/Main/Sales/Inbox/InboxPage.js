import React, { useEffect, useState } from "react"
import "./InboxPage.scss"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import MUIDataTable from "mui-datatables"
import DataGridTables from "../../../components/DataGridTables"
import LeadsModule from "../Leads/LeadsModule"


const InboxPage = () => {
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
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
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

  // useEffect(()=>{
  //   testData();
  // },[])

  // const testData = async () =>{
  //   try{
  //     const postdata = await axios.get(`/leadService/api/v1/lead/testPost`);
  //     console.log("data", postdata);

  //   }catch(err){
  //     console.log("err", err);

  //   }
  // }





  const getAllLead = async () => {
    try {
      const allLead = await axios.get(`/leadService/api/v1/inbox/getAllInboxData`, {
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

      {/* <LeadsModule */}

      {/* <DataGridTables />
      <div className="mt-5">
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div> */}

      {/* data table */}
      <div className="table-responsive mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Comment</th>
              <th scope="col">Count</th>
            </tr>
          </thead>
          <tbody>
            {allLeadData.map((lead, i) => (
              <tr key={i}>
                <td>{lead.id}</td>
                <td>
                  <Link to={`/erp/${currentUserId}/sales/${lead.id}`}>{lead.name}</Link>
                </td>
                <td>{lead.comment}</td>
                <td>{lead.count===0 ? lead.count : <div className="lead-count">{lead.count}</div>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InboxPage
