import React, { useState } from "react"
import { useCustomRoute } from "../../Routes/GetCustomRoutes"
import UserListComponent from "../../Tables/UserListComponent"
import { putQueryNoData } from "../../API/PutQueryWithoutData"
import TableOutlet from "../../components/design/TableOutlet"
import MainHeading from "../../components/design/MainHeading"

const AllDeactivateUser = () => {
  const [deactiveDep, setDeactiveDep] = useState(false)

  const allDeactivateUser = `/leadService/api/v1/users/getAllDeactivateUser`
  const deactivateUserDep = [deactiveDep]

  const { productData: allDeactivateUsers, loading: userLoading } =
    useCustomRoute(allDeactivateUser, deactivateUserDep)

    const userCount = allDeactivateUsers.length;

 

  const activateUserFun = async (id) => {
    if (window.confirm("Are you sure to Activate this User?") == true) {
      try {
        const activeLogin = await putQueryNoData(
          `/securityService/api/auth/activateUser?userId=${id}`
        )
        const activeLead = await putQueryNoData(
          `/leadService/api/v1/users/activateUser?id=${id}`
        )

       
        setDeactiveDep((prev) => !prev)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      renderCell: (props) => {
        return <p className="mb-0">CORP00{props?.row?.id}</p>
      },
    },
    { field: "fullName", headerName: "Full Name", width: 150 },
    { field: "email", headerName: "Email", width: 240, hideable: false },
    { field: "designation", headerName: "Designation", width: 150 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (props) => {
        return (
          <button
            className="common-btn-one"
            onClick={() => activateUserFun(props?.row?.id)}
          >
            Activate
          </button>
        )
      },
    },
  ]

  return (
    <TableOutlet>
      <div className="create-user-box">
        <MainHeading data={`Deactivate Users (${userCount})`} />
      </div>
      <div className="mt-3">
        <UserListComponent
          tableName={""}
          columns={columns}
          row={allDeactivateUsers}
        />
      </div>
    </TableOutlet>
  )
}

export default AllDeactivateUser
