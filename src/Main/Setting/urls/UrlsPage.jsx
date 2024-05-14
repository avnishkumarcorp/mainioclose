import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllUrlAction } from "../../../Toolkit/Slices/LeadUrlSlice";
import MainHeading from "../../../components/design/MainHeading";
import TableBoot from "../../../components/tablesData/TableBoot";

const UrlsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getAllUrlAction())
    }, [dispatch])
  
    const { allLeadUrl, allLeadUrlLoading, allLeadUrlError } = useSelector(
      (prev) => prev?.leadurls
    )

    console.log(allLeadUrl);

    const tableHead = ["id", "Url Name", "Quality"]

  return (
    <div>
    <MainHeading data={`Urls Create`} />
    {/* <div className="lead-box">
      <form>
        <LongInput
          type="text"
          label={`Enter Slug Name`}
          value={slugName}
          onChange={(e) => setSlugName(e.target.value)}
        />
        <SmOneBtn name="Submit" onClick={createSlugFun} />
      </form>
    </div> */}

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
  );
};

export default UrlsPage;
