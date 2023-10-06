import axios from "axios"
import React, { useEffect } from "react"
import { useState } from "react"
import DataGridExample from "../../components/DataGridExample"

const DisplayUserTwo = () => {
  const [displayAlluser, setDisplayAllUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    displayUser()
  }, [])

  // const rows = [
  //     { id: 1, id: 'Hello', firstName: 'World' },
  //     { id: 2, id: 'DataGridPro', firstName: 'is Awesome' },
  //     { id: 3, id: 'MUI', firstName: 'is Amazing' },
  //   ];

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "firstName", headerName: "First", width: 150 },
    { field: "lastName", headerName: "Last", width: 150 },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    // { field: "profile", headerName: "Profile", width: 150, },
  ]

  const displayUser = async () => {
    try {
      const userData = await axios.get(`/leadService/api/v1/users/getAllUser`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      console.log(userData)
      setDisplayAllUser(userData.data)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  console.log("user data ", displayAlluser)

  return (
    <div className="p-4">
      <h1>Table</h1>
      <DataGridExample rows={displayAlluser} columns={columns} />
    </div>
  )
}

export default DisplayUserTwo
