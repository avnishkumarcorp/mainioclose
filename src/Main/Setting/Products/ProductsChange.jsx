import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { postQuery } from "../../../API/PostQuery"
import InputErrorComponent from "../../../components/InputErrorComponent"
import SmallTableScalaton from "../../../components/Scalaton/SmallTableScalaton"
import { deleteQuery } from "../../../API/DeleteQuery"

const ProductsChange = () => {
  const { userid } = useParams()

  const [addNewProduct, setAddNewProduct] = useState({
    name: "",
    categoryId: null,
    userId: userid,
  })

  const [nameError, setNameError] = useState(false)
  const [catError, setcatError] = useState(false)
  const [addProductDep, setAddProductDep] = useState(false);
  const [deleteCategoryDep, setDeleteCategoryDep] = useState(false)

  const nameRef = useRef()
  const catRef = useRef()

  const [btnLoading, setBtnLoading] = useState(false)

  const getProductData = (e) => {
    setAddNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(addNewProduct)

  const createNewProduct = async (e) => {
    e.preventDefault()

    if (nameRef.current.value === "") {
      setNameError(true)
      return
    }

    console.warn(catRef.current)

    if (addNewProduct.categoryId === null) {
      setcatError(true)
      return
    }

    try {
      const productData = await postQuery(
        `/leadService/api/v1/product/createProduct`,
        addNewProduct
      )
      setAddProductDep((prev) => !(prev))
      console.log(productData)
    } catch (err) {
      console.log(err)
    }
    addNewProduct.name = ""
    addNewProduct.categoryId = null
  }

  const categoryUrl = `/leadService/api/v1/category/getAllCategories`
  const categoryDep = []

  const { productData: categoryData, loading: categoryLoading } =
    useCustomRoute(categoryUrl, categoryDep)

    const productUrl = `/leadService/api/v1/product/getAllProducts`
    const productDep = [addProductDep, deleteCategoryDep]
  
    const { productData: productData, loading: productLoading } =
      useCustomRoute(productUrl, productDep)

      const deleteProductFun = async (statusId) => {
        console.log("cat id", statusId)
        if (window.confirm("Are you sure to delete this record?") == true) {
          try {
            const leadProductDel = await deleteQuery(
              `  /leadService/api/v1/product?id=${statusId}`
            )
            setDeleteCategoryDep((prev) => !prev)
            console.log("delete call0, ", leadProductDel)
          } catch (err) {
            console.log(err)
          }
        }
      }

    
    

  console.log("product",productData)

  return (
    <div>
      <h1 className="table-heading">Lead Product</h1>
      <div className="py-3">
        <form>
          <label className="label-heading mb-1" for="statusCreate">
            Enter Product Name
          </label>
          <br />
          <input
            type="text"
            ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="name"
            className="form-control input-focus"
          />
          {nameError ? (
            <InputErrorComponent value="Product Name can't be Blank" />
          ) : (
            ""
          )}
          <label className="label-heading mt-2 mb-1" htmlFor="select-product">
            Select Category
          </label>

          <select
            className="form-control input-focus"
            name="categoryId"
            ref={catRef}
            onChange={(e) => getProductData(e)}
            id="select-product"
          >
            <option>Select Category</option>
            {categoryData.map((status, index) => (
              <option key={index} value={status?.id}>
                {status?.categoryName}
              </option>
            ))}
          </select>
          {catError ? (
            <InputErrorComponent value="Please Select Category" />
          ) : (
            ""
          )}
          <button
            onClick={(e) => createNewProduct(e)}
            className="action-btn my-2"
          >
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
                <th scope="col">Product Name</th>
                <th scope="col">Created Date</th>
                <th scope="col">Created By</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {productLoading ? (
                <SmallTableScalaton />
              ) : (
                productData.map((status, index) => (
                  <tr key={index}>
                    <th>{status.id}</th>
                    <td>{status?.productName}</td>
                    <td>{new Date(status.createdDate).toLocaleDateString()}</td>
                    <td>{status?.createdBy?.fullName}</td>
                    <td>
                      <i
                        onClick={() => deleteProductFun(status.id)}
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

export default ProductsChange
