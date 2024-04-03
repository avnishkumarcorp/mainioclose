import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { useCustomRoute } from "../../../Routes/GetCustomRoutes"
import { postQuery } from "../../../API/PostQuery"
import InputErrorComponent from "../../../components/InputErrorComponent"
import SmallTableScalaton from "../../../components/Scalaton/SmallTableScalaton"
import { deleteQuery } from "../../../API/DeleteQuery"
import FirstInput from "../../../components/Inputs/FirstInput"
import LongInput from "../../../components/Inputs/LongInput"
import UserLeadComponent from "../../../Tables/UserLeadComponent"

const ProductsChange = () => {
  const { userid } = useParams()

  const [addNewProduct, setAddNewProduct] = useState({
    name: "",
    categoryId: null,
    userId: userid,
    govermentfees: "",
    govermentCode: "",
    govermentGst: "",
    professionalFees: "",
    professionalCode: "",
    profesionalGst: "",
    serviceCharge: "",
    serviceCode: "",
    serviceGst: "",
    otherFees: "",
    otherCode: "",
    otherGst: "",
  })

  const [nameError, setNameError] = useState(false)
  const [catError, setcatError] = useState(false)
  const [addProductDep, setAddProductDep] = useState(false)
  const [deleteCategoryDep, setDeleteCategoryDep] = useState(false)

  const nameRef = useRef()
  const catRef = useRef()
  const govermentfeesRef = useRef()
  const govermentGstRef = useRef()

  console.log(addNewProduct)

  const [btnLoading, setBtnLoading] = useState(false)

  const getProductData = (e) => {
    setAddNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
        `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/product/createProduct`,
        addNewProduct
      )
      setAddProductDep((prev) => !prev)
      setAddNewProduct({
        name: "",
        categoryId: null,
        userId: userid,
        govermentfees: 0,
        govermentCode: "",
        govermentGst: 0,
        professionalFees: 0,
        professionalCode: "",
        profesionalGst: 0,
        serviceCharge: 0,
        serviceCode: "",
        serviceGst: 0,
        otherFees: 0,
        otherCode: "",
        otherGst: 0,
      })
      console.log("Product created !!")
    } catch (err) {
      console.log(err)
    }
    
  }

  const categoryUrl = `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/category/getAllCategories`
  const categoryDep = []

  const { productData: categoryData, loading: categoryLoading } =
    useCustomRoute(categoryUrl, categoryDep)

  const productUrl = `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/product/getAllProducts`
  const productDep = [addProductDep, deleteCategoryDep]

  const { productData: productData, loading: productLoading } = useCustomRoute(
    productUrl,
    productDep
  )

  const ProductCol = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "productName", headerName: "Product name", width: 150 },
    { field: "govermentfees", headerName: "Goverment fees", width: 150 },
    { field: "govermentCode", headerName: "Goverment Code", width: 150 },
    { field: "govermentGst", headerName: "Goverment GST (%)", width: 150 },
    { field: "professionalFees", headerName: "Professional Fees", width: 150 },
    { field: "professionalCode", headerName: "Professional Code", width: 150 },
    { field: "profesionalGst", headerName: "Profesional GST (%)", width: 150 },

    { field: "serviceCharge", headerName: "Service Charge", width: 150 },
    { field: "serviceCode", headerName: "Service Code", width: 150 },
    { field: "serviceGst", headerName: "Service GST (%)", width: 150 },
    { field: "otherFees", headerName: "Other Fees", width: 150 },
    { field: "otherCode", headerName: "Other Code", width: 150 },
    { field: "otherGst", headerName: "Other GST (%)", width: 150 },
    {
      field: "Action",
      headerName: "Delete",
      width: 150,
      renderCell: (props) => (
        <i
          onClick={() => deleteProductFun(props.row.id)}
          className="fa-solid gray-cl fa-trash"
        ></i>
      ),
    },
  ]

  const deleteProductFun = async (statusId) => {
    if (window.confirm("Are you sure to delete this record?") == true) {
      try {
        const leadProductDel = await deleteQuery(
          `${process.env.REACT_APP_LEAD_URL}/leadService/api/v1/product/delete?id=${statusId}`
        )
        setDeleteCategoryDep((prev) => !prev)
      } catch (err) {
        console.log(err)
      }
    }
  }

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
            value={addNewProduct.name}
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
            value={addNewProduct.categoryId}
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
          <LongInput
            label="Goverment fees"
            type="text"
            ref={govermentfeesRef}
            value={addNewProduct.govermentfees}
            onChange={(e) => getProductData(e)}
            name="govermentfees"
          />
          <LongInput
            label="Goverment Code"
            type="text"
            // ref={nameRef}
            value={addNewProduct.govermentCode}
            onChange={(e) => getProductData(e)}
            name="govermentCode"
          />
          <LongInput
            label="Goverment GST (%)"
            type="text"
            ref={govermentGstRef}
            onChange={(e) => getProductData(e)}
            name="govermentGst"
          />
          <LongInput
            label="Professional Fees"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="professionalFees"
          />
          <LongInput
            label="Professional Code"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="professionalCode"
          />
          <LongInput
            label="Profesional GST (%)"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="profesionalGst"
          />
          <LongInput
            label="Service Charge"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="serviceCharge"
          />
          <LongInput
            label="Service Code"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="serviceCode"
          />
          <LongInput
            label="Service GST (%)"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="serviceGst"
          />
          <LongInput
            label="Other Fees"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="otherFees"
          />
          <LongInput
            label="Other Code"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="otherCode"
          />
          <LongInput
            label="Other GST (%)"
            type="text"
            // ref={nameRef}
            onChange={(e) => getProductData(e)}
            name="otherGst"
          />

          <button
            onClick={(e) => createNewProduct(e)}
            className="action-btn my-2"
          >
            {btnLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>

      <div className="mt-4 setting-table">
        {productLoading ? (
          <SmallTableScalaton />
        ) : (
          <UserLeadComponent columns={ProductCol} row={productData} />
        )}

        {/* <div className="table-responsive">
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
        </div> */}
      </div>
    </div>
  )
}

export default ProductsChange
