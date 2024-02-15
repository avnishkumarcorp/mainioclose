import React, { useState } from "react"
import "./ContactModule.scss"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import UserListComponent from "../../../Tables/UserListComponent"

const ContactModule = () => {

  const contactUrl = `/leadService/api/v1/client/getAllClientInfo`
  const contactDep = []

  const { productData: allContact } = useCustomRoute(contactUrl, contactDep)

  console.log(allContact)

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Client Name", width: 250 },
    { field: "contactNo", headerName: "Mobile Number", width: 200 },
    { field: "emails", headerName: "Email ID", width: 250 },
  ]

  return (
    <div className="lead-module small-box-padding">
      <div className="create-user-box">
        <h1 className="table-heading">All Contacts</h1>
      </div>
      <div className="mt-3">
        <UserListComponent row={allContact} columns={columns} />
      </div>
    </div>
  )
}

export default ContactModule
