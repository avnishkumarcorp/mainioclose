import React from "react";
import DataGridTables from "./DataGridTables";
import MUIDataTable from "mui-datatables";


const DataTableFirst = ({allleaddata, leadColumns, filterOptions}) => {
 
 
   


  return (
    <>
    <div className="mt-5">
        <MUIDataTable
          title={"Inbox"}
          data={allleaddata}
          columns={leadColumns}
          options={filterOptions}
        />
      </div>
    </>
  )
};

export default DataTableFirst;
