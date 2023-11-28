import React, { useEffect, useState } from "react"
import { getQuery } from "../API/GetQuery"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

export const useCustomRoute = (link) => {
  const [productData, setProductData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAlldataFun()
  }, [])

  const getAlldataFun = async () => {
    try {
      const dataResponse = await getQuery(link)
      setProductData(dataResponse.data)
      setLoading(false)
      toast.success("get all Data")
    } catch (err) {
      console.log("Err", err)
      setError(true)
      setLoading(false)
    }
  }
  return { productData, loading, error}
}
