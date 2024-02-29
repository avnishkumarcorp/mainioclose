import React from "react";
import UserListComponent from "../../Tables/UserListComponent";

const AllTickets = () => {


    const allMainUser = [];
    const columns = [];

  return (
  <div className="small-box-padding">
    <div className="py-3">
         <h1 className="table-heading">All Tickets</h1>
         <div className="py-2">
         <UserListComponent tableName={""} columns={columns} row={allMainUser} />
         </div>
         </div>
    </div>
  )
};

export default AllTickets;
