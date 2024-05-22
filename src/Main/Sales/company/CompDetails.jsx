import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getCompanyLeadsAction,
  getCompanyProjectAction,
} from "../../../Toolkit/Slices/CompanySlice"
import { useParams } from "react-router-dom"
import TableOutlet from "../../../components/design/TableOutlet"
import MainHeading from "../../../components/design/MainHeading"

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

  const { compProject, compProjectLoading, compProjectError } = useSelector(
    (prev) => prev?.company
  )

  const { compLeads, compLeadsLoading, compLeadsError } = useSelector(
    (prev) => prev?.company
  )

  const toggleProjectLeads = () => {
    setProjectDep((prev) => !prev)
  }

  return (
    <TableOutlet>
      <div className="all-center">
        <button
          onClick={toggleProjectLeads}
          className={`normal-btn ${projectdep ? "active" : ""}`}
        >
          Projects
        </button>
        <button
          onClick={toggleProjectLeads}
          className={`normal-btn ${projectdep ? "" : "active"}`}
        >
          Leads
        </button>
      </div>
      <MainHeading data={`${projectdep ? "All Projects" : "All Leads"}`} />
    </TableOutlet>
  )
}

export default CompDetails
