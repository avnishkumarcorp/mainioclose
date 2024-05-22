import React, { useEffect } from "react"
import TableOutlet from "../../../components/design/TableOutlet"
import MainHeading from "../../../components/design/MainHeading"
import { useDispatch, useSelector } from "react-redux"
import { getCompanyAction } from "../../../Toolkit/Slices/CompanySlice"
import TableScalaton from "../../../components/TableScalaton"
import SomethingWrong from "../../../components/usefulThings/SomethingWrong"
import ColComp from "../../../components/small/ColComp"
import UserListComponent from "../../../Tables/UserListComponent"
import { Link } from "react-router-dom"

const MainCompanyPage = () => {
  const dispatch = useDispatch()

  const currUserId = useSelector((prev) => prev?.auth?.currentUser?.id)
  console.log(currUserId)

  useEffect(() => {
    dispatch(getCompanyAction({ id: currUserId }))
  }, [])

  const { allCompnay, loadingCompany, errorCompany } = useSelector(
    (prev) => prev?.company
  )

  console.log(allCompnay)

  const columns = [
    {
      field: "companyId",
      headerName: "ID",
      width: 60,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 200,
      renderCell: (props) => (
        <Link to={`${props?.row?.companyId}/details`}>{props?.row?.companyName}</Link>
      ) ,
    },
    {
      field: "gstNo",
      headerName: "GST Number",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.gstNo} />,
    },

    {
      field: "country",
      headerName: "Country",
      width: 120,
      renderCell: (props) => <ColComp data={props?.row?.country} />,
    },

    {
      field: "state",
      headerName: "State",
      width: 120,
      renderCell: (props) => <ColComp data={props?.row?.state} />,
    },

    {
      field: "city",
      headerName: "City",
      width: 120,
      renderCell: (props) => <ColComp data={props?.row?.city} />,
    },

    {
      field: "address",
      headerName: "Address",
      width: 150,
      renderCell: (props) => <ColComp data={props?.row?.address} />,
    },
  ]

  return (
    <TableOutlet>
      <MainHeading data={`ALL Company`} />
      <div className="mt-3">
        {loadingCompany && <TableScalaton />}
        {errorCompany && <SomethingWrong />}
        {allCompnay && !loadingCompany && !errorCompany && (
          <UserListComponent
            tableName={""}
            columns={columns}
            getRowId={(row) => row.companyId}
            row={allCompnay}
          />
        )}
      </div>
    </TableOutlet>
  )
}

export default MainCompanyPage
