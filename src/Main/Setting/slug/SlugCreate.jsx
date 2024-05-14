import React, { useEffect, useState } from "react"
import LongInput from "../../../components/Inputs/LongInput"
import SmOneBtn from "../../../components/button/SmOneBtn"
import MainHeading from "../../../components/design/MainHeading"
import { useDispatch, useSelector } from "react-redux"
import {
  getAllSlugAction,
  leadSlugAction,
} from "../../../Toolkit/Slices/LeadSlugSlice"
import TableBoot from "../../../components/tablesData/TableBoot"

const SlugCreate = () => {
  const [slugName, setSlugName] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSlugAction())
  }, [dispatch])

  const { allLeadSlug, allLeadSlugLoading, allLeadSlugError } = useSelector(
    (prev) => prev?.leadslug
  )

  console.log(allLeadSlug)

  const createSlugFun = async (e) => {
    e.preventDefault()
    const slugCreation = await dispatch(leadSlugAction(slugName))
    if ((slugCreation.type = "createLeadSlugData/fulfilled")) {
      setSlugName("")
    }
  }

  const tbDtaa = ["id", "Name"]

  return (
    <div>
      <MainHeading data={`Slug Create`} />
      <div className="lead-box">
        <form>
          <LongInput
            type="text"
            label={`Enter Slug Name`}
            value={slugName}
            onChange={(e) => setSlugName(e.target.value)}
          />
          <SmOneBtn name="Submit" onClick={createSlugFun} />
        </form>
      </div>

      <TableBoot
        tbRow={tbDtaa}
        loading={allLeadSlugLoading}
        error={allLeadSlugError}
      >
        {allLeadSlug?.map((status, index) => (
          <tr key={index}>
            <th>{status.id}</th>
            <td>{status?.name}</td>
          </tr>
        ))}
      </TableBoot>
    </div>
  )
}

export default SlugCreate
