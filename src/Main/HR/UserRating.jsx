import React, { useEffect } from "react"
import TableOutlet from "../../components/design/TableOutlet"
import MainHeading from "../../components/design/MainHeading"
import UserListComponent from "../../Tables/UserListComponent"
import { useDispatch, useSelector } from "react-redux"
import { getAllRating } from "../../Toolkit/Slices/UserRatingSlice"
import TableScalaton from "../../components/TableScalaton"
import SomethingWrong from "../../components/usefulThings/SomethingWrong"

const UserRating = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllRating())
  }, [])

  const { allUserRating, UserRatingLoading, UserRatingError } = useSelector(
    (prev) => prev?.rating
  )

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
        console.log(arrayOfZeros)
        return arrayOfZeros.map((star) => (
          <span className="text-warning ml-1">
            <i className="fa-solid fa-star"></i>
          </span>
        ))
      },
    },
  ]

  console.log("i am", allUserRating)

  return (
    <TableOutlet>
      <MainHeading data={"Rating List"} />
      <div className="mt-3">
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