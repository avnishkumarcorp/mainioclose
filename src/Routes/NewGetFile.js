import React from "react";
import { useCustomRoute } from "./GetCustomRoutes";


const NewGetFile = () => {

  const url =  `/leadService/api/v1/product/getProduct?id=${1}`

  const {productData, loading, error} = useCustomRoute(url);

  console.log(productData);
  console.log(loading);

  return (
    <div>
        <h2>Data</h2>
        <h2>Get Data</h2>
        {loading ? <h1>Loading</h1> :  <h1>{productData?.productName}</h1>}
       
    </div>
  )
};

export default NewGetFile;
