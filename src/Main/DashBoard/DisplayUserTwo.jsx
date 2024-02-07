import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import DataGridExample from "../../components/DataGridExample"
import { Link } from "react-router-dom"

const DisplayUserTwo = () => {
  const [displayAlluser, setDisplayAllUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    displayUser()
  }, [])


  const handleEdit = (id) =>{
    console.log("Selected row id is ");
  }
 
  const columns = [
    { field: "id", headerName: "ID", width: 150 }, 
    { field: "firstName", headerName: "First", width: 150 },
    { field: "lastName", headerName: "Last", width: 150, renderCell: (params) =>{
        return <Link to="/" >{params.row.lastName}</Link>
    } },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 150, hideable: false  },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "Edit", headerName: "Edit", width: 150, renderCell: (params)=>{
        return <button onClick={(id)=> handleEdit(params.row.id) }>id is  {params.row.id}</button> 
    }},
    
  ]
  
  const displayUser = async () => {
    try {
      const userData = await axios.get(`/leadService/api/v1/users/getAllUser`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      setDisplayAllUser(userData.data)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="p-4">
      <h1>Table</h1>
      <DataGridExample rows={displayAlluser} columns={columns} />
    </div>
  )
}

export default DisplayUserTwo
