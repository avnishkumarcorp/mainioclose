import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { postQuery } from "../../../API/PostQuery"
import InputErrorComponent from "../../../components/InputErrorComponent"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import SmallTableScalaton from "../../../components/Scalaton/SmallTableScalaton"
import { deleteQuery } from "../../../API/DeleteQuery"

const LeadCategory = () => {
  const { userid } = useParams()

  const [leadCategory, setLeadCategory] = useState({
    name: "",
    userId: userid,
  })

  const [deleteCategoryDep, setDeleteCategoryDep] = useState(false)
  const [createCategoryDep, setCreateCategoryDep] = useState(false)

  const [btnLoading, setBtnLoading] = useState(false)
  const [nameError, setNameError] = useState(false)

  const nameRef = useRef()

  const createCatFun = async (e) => {
    e.preventDefault()

    if (nameRef.current.value === "") {
      setNameError(true)
      return
    }
    setNameError(false)

    setBtnLoading(true)
    try {
      const catDataRes = await postQuery(
        `/leadService/api/v1/category/createCategory`,
        leadCategory
      )
      console.log(catDataRes)
      setCreateCategoryDep((prev) => !prev)
      setBtnLoading(false)
      nameRef.current.value = ""
    } catch (err) {
      console.log(err)
      setBtnLoading(false)
    }
  }

  const categoryUrl = `/leadService/api/v1/category/getAllCategories`
  const categoryDep = [createCategoryDep, deleteCategoryDep]

  const { productData: categoryData, loading: categoryLoading } =
    useCustomRoute(categoryUrl, categoryDep)

  console.log(categoryData)

  const deleteCategoryFun = async (statusId) => {
    console.log("cat id", statusId)
    if (window.confirm("Are you sure to delete this record?") == true) {
      try {
        const leadCategoryDel = await deleteQuery(
          `/leadService/api/v1/category/deleteCategory?categoryId=${statusId}`
        )
        setDeleteCategoryDep((prev) => !prev)
        console.log("delete call0, ", leadCategoryDel)
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div>
      <h1 className="table-heading">Lead Category</h1>
      <div className="lead-box">
        <form>
          <label className="label-heading mb-1" for="statusCreate">
            Enter Category Name
          </label>
          <br />
          <input
            type="text"
            ref={nameRef}
            onChange={(e) =>
              setLeadCategory((cat) => ({ ...cat, name: e.target.value }))
            }
            name="name"
            className="form-control input-focus"
          />
          {nameError ? (
            <InputErrorComponent value="Category Name can't be Blank" />
          ) : (
            ""
          )}
          <button onClick={(e) => createCatFun(e)} className="action-btn my-2">
            {btnLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>

      <div className="mt-4 setting-table">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Created Date</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {categoryLoading ? (
                <SmallTableScalaton />
              ) : (
                categoryData.map((status, index) => (
                  <tr key={index}>
                    <th>{status.id}</th>
                    <td>{status?.categoryName}</td>
                    <td>{new Date(status.createdDate).toLocaleDateString()}</td>
                    <td>
                      <i
                        onClick={() => deleteCategoryFun(status.id)}
                        className="fa-solid gray-cl fa-trash"
                      ></i>{" "}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LeadCategory
