import React from "react"
import TableScalaton from "./TableScalaton"
import UserListComponent from "../Tables/UserListComponent"
import SomethingWrong from "./usefulThings/SomethingWrong"

const TableComp = ({ loading, error, data, col, className = "" }) => {
  return (
    <div className={`py-2 ${className}`}>
      {loading && <TableScalaton />}
      {error && <SomethingWrong />}
      {data && !loading && !error && (
        <UserListComponent rows={data} columns={col} />
      )}
    </div>
  )
}

export default TableComp
