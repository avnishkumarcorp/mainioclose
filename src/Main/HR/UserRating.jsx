import React, { useEffect, useState } from "react"
import TableOutlet from "../../components/design/TableOutlet"
import MainHeading from "../../components/design/MainHeading"
import UserListComponent from "../../Tables/UserListComponent"
import { useDispatch, useSelector } from "react-redux"
import { getAllRating } from "../../Toolkit/Slices/UserRatingSlice"
import TableScalaton from "../../components/TableScalaton"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"
import CreateRatingModel from "../../Model/CreateRatingModel"

const UserRating = () => {
  const [hidebox, setHidebox] = useState(true)
  const [ratingDep, setRatingDep] = useState(false)
  const [myobjData, setmyObjData] = useState({})
  const [editRatingDep, setEditRatingDep] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllRating())
  }, [ratingDep])

  const { allUserRating, UserRatingLoading, UserRatingError } = useSelector(
    (prev) => prev?.rating
  )

  const editRatingUser = (data) => {
    setmyObjData((prev) => ({ ...prev, data }))
    setEditRatingDep(true)
    setHidebox((prev) => !prev)
  }

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    { field: "serviceName", headerName: "Service Name", width: 250 },
    { field: "assignee", headerName: "Assignee", width: 250 },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
      renderCell: (props) => {
        const arrayOfZeros = Array.from({ length: props?.row?.rating }, () => 0)
        return arrayOfZeros.map((star) => (
          <span className="text-warning ml-1">
            <i className="fa-solid fa-star"></i>
          </span>
        ))
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 250,
      renderCell: (props) => {
        return (
          <button
            className="common-btn-one mr-2"
            onClick={() => editRatingUser(props?.row)}
          >
            edit{" "}
          </button>
        )
      },
    },
  ]

  return (
    <TableOutlet>
      <div className="create-user-box">
        <MainHeading data={"Rating List"} />
        <button
          className="team-edit-button create-user-btn"
          onClick={() => setHidebox((prev) => !prev)}
        >
          <i className="fa-solid mr-1 fa-circle-plus"></i>
        </button>
      </div>
      <CreateRatingModel editRatingDep={editRatingDep} myobjData={myobjData} hidebox={hidebox} setRatingDep={setRatingDep} />
      <div>
        {UserRatingLoading && <TableScalaton />}
        {UserRatingError && <SomethingWrong />}
        {allUserRating && !UserRatingLoading && !UserRatingError && (
          <UserListComponent
            tableName={""}
            columns={columns}
            row={allUserRating}
          />
        )}
      </div>
    </TableOutlet>
  )
}

export default UserRating
