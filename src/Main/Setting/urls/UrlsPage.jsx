import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUrlAction } from "../../../Toolkit/Slices/LeadUrlSlice"
import MainHeading from "../../../components/design/MainHeading"
import TableBoot from "../../../components/tablesData/TableBoot"
import LongInput from "../../../components/Inputs/LongInput"
import SmOneBtn from "../../../components/button/SmOneBtn"

const UrlsPage = () => {
  const [urlLeadData, setUrlLeadData] = useState({
    urlsName: "",
    urlSlug: [],
    quality: true,
  })

  console.log(urlLeadData);

  const saveUrlData = (e) => {
    setUrlLeadData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUrlAction())
  }, [dispatch])

  const { allLeadUrl, allLeadUrlLoading, allLeadUrlError } = useSelector(
    (prev) => prev?.leadurls
  )

  console.log(allLeadUrl)

  const tableHead = ["id", "Url Name", "Quality"]

  return (
    <div>
      <MainHeading data={`Urls Create`} />
      <div className="lead-box">
        <form>
          <LongInput
            type="text"
            name="urlsName"
            label={`Enter Url Name`}
            onChange={saveUrlData}
          />
          <SmOneBtn name="Submit" />
        </form>
      </div>

      <TableBoot
        tbRow={tableHead}
        loading={allLeadUrlLoading}
        error={allLeadUrlError}
      >
        {allLeadUrl?.map((status, index) => (
          <tr key={index}>
            <th>{status.id}</th>
            <td>{status?.urlsName}</td>
            <td>{status?.quality ? "True" : "False"}</td>
          </tr>
        ))}
      </TableBoot>
    </div>
  )
}

export default UrlsPage
