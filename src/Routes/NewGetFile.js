import React, { useState } from "react";
import { useCustomRoute } from "./GetCustomRoutes";


const NewGetFile = () => {

  const url =  `/leadService/api/v1/product/getProduct?id=${1}`
  const [btnOne, setBtnOne] = useState(false);

  const handleClickOne = () =>{
    setBtnOne((prev) => !(prev))
  }

  const dataOne = [btnOne]


  const {productData, loading, error} = useCustomRoute(url, dataOne);

  
  return (
    <div>
        <h2>Data</h2>
        <h2>Get Data</h2>
        {loading ? <h1>Loading</h1> :  <h1>{productData?.productName}</h1>}
        <button onClick={() => handleClickOne()}>state one</button>
       
    </div>
  )
};

export default NewGetFile;
