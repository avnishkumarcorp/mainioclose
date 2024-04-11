import React, { Suspense, useEffect, useState } from "react"
import { putQueryNoData } from "../../API/PutQueryWithoutData"
import MainHeading from "../../components/design/MainHeading"
import { deactivateUserListCol } from "../../data/Userdata"
import { useDispatch, useSelector } from "react-redux"
import { allDeactivateUserFun } from "../../Toolkit/Slices/UsersSlice"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"
import TableScalaton from "../../components/TableScalaton"

const UserListComponent = React.lazy(() =>
  import(`../../Tables/UserListComponent`)
)

const AllDeactivateUser = () => {
  const [deactiveDep, setDeactiveDep] = useState(false)
  const dispatch = useDispatch()

  const { allDeactivateUsers, userDeactivateLoading, userDeactivateError } =
    useSelector((state) => state?.user)

  const userCount = allDeactivateUsers.length

  useEffect(() => {
    dispatch(allDeactivateUserFun())
  }, [dispatch, deactiveDep])

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
    ...deactivateUserListCol,
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
    <>
      <div className="create-user-box">
        <MainHeading data={`Deactivate Users (${userCount})`} />
      </div>
      <div className="mt-3">
        {userDeactivateError && <SomethingWrong />}
        {!userDeactivateError && (
          <Suspense fallback={<TableScalaton />}>
            <UserListComponent
              tableName={""}
              columns={columns}
              row={allDeactivateUsers}
            />
          </Suspense>
        )}
      </div>
    </>
  )
}

export default AllDeactivateUser
