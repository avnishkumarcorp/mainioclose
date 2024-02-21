import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Decrement, Increment } from "../Redux/Action/CounterAction"
import axios from "axios"

const CounterExample = () => {
  const counterValue = useSelector((state) => state.counterReducer)
  const dispatch = useDispatch()

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = '/uploadimageToFileSystem';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });

  }

  return (
    <div>
      <button
        onClick={() => dispatch(Increment(1))}
        className="btn btn-primary"
      >
        Increment
      </button>
      <h1>{counterValue}</h1>
      <button
        onClick={() => dispatch(Decrement(1))}
        className="btn btn-primary"
      >
        Decrement
      </button>
      <form onSubmit={handleSubmit}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default CounterExample
