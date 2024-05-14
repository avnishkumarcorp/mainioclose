import React from "react"
import SmallTableScalaton from "../Scalaton/SmallTableScalaton"

const TableBoot = ({ children, tbRow, loading, error }) => {
  return (
    <>
      {loading && <SmallTableScalaton />}
      {error && <h1>Something went Wrong</h1>}
      {!loading && !error ? (
        <div className="mt-4 setting-table">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {tbRow?.map((data, index) => (
                    <th key={index} scope="col">
                      {data}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default TableBoot
