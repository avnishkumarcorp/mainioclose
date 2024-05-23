import React, { Suspense, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getCompanyLeadsAction,
  getCompanyProjectAction,
} from "../../../Toolkit/Slices/CompanySlice"
import { useParams } from "react-router-dom"
import TableOutlet from "../../../components/design/TableOutlet"
import MainHeading from "../../../components/design/MainHeading"
import SomethingWrong from "../../../components/usefulThings/SomethingWrong"
import TableScalaton from "../../../components/TableScalaton"
import ColComp from "../../../components/small/ColComp"

const UserListComponent = React.lazy(() =>
  import(`../../../Tables/UserListComponent`)
)

const CompDetails = () => {
  const dispatch = useDispatch()

  const [projectdep, setProjectDep] = useState(true)

  const { companyId } = useParams()

  useEffect(() => {
    dispatch(getCompanyProjectAction({ id: companyId }))
  }, [])

  useEffect(() => {
    dispatch(getCompanyLeadsAction({ id: companyId }))
  }, [])

  const { compProject, compProjectError } = useSelector((prev) => prev?.company)

  const { compLeads, compLeadsError } = useSelector((prev) => prev?.company)

  const toggleProjecttrue = () => {
    setProjectDep(true)
  }
  const toggleProjectfalse = () => {
    setProjectDep(false)
  }


  const compColumns = [
    {
      field: "projectId",
      headerName: "ID",
      width: 80,
    },
    {
      field: "projectName",
      headerName: "Project Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.projectName} />,
    },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.product} />,
    },
    {
      field: "assignee",
      headerName: "Assignee",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.assignee} />,
    },
  ]

  const compLeadsCol = [
    {
      field: "leadId",
      headerName: "ID",
      width: 60,
    },
    {
      field: "leadName",
      headerName: "Lead Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.leadName} />,
    },
    {
      field: "client",
      headerName: "Client Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.client} />,
    },
    {
      field: "ipAddress",
      headerName: "IP Address",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.ipAddress} />,
    },
    {
      field: "assignee",
      headerName: "Assignee Name",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.assignee?.fullName} />,
    },
  ]

  return (
    <TableOutlet>
      <div className="all-center">
        <button
          onClick={toggleProjecttrue}
          className={`normal-btn ${projectdep ? "active" : ""}`}
        >
          Projects
        </button>
        <button
          onClick={toggleProjectfalse}
          className={`normal-btn ${projectdep ? "" : "active"}`}
        >
          Leads
        </button>
      </div>
      <MainHeading data={`${projectdep ? "All Projects" : "All Leads"}`} />
      {projectdep ? (
        <>
          {compProjectError && <SomethingWrong />}
          {!compProjectError && (
            <Suspense fallback={<TableScalaton />}>
              <UserListComponent
                tableName={""}
                columns={compColumns}
                getRowId={(row) => row.projectId}
                row={compProject}
              />
            </Suspense>
          )}
        </>
      ) : (
        ""
      )}

      {projectdep ? (
        ""
      ) : (
        <>
          {compLeadsError && <SomethingWrong />}
          {!compLeadsError && (
            <Suspense fallback={<TableScalaton />}>
              <UserListComponent
                tableName={""}
                columns={compLeadsCol}
                getRowId={(row) => row.leadId}
                row={compLeads}
              />
            </Suspense>
          )}
        </>
      )}
    </TableOutlet>
  )
}

export default CompDetails
