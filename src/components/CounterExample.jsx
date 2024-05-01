import React, { useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"

const CounterExample = () => {
  const counterValue = useSelector((state) => state.counterReducer)

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = "/uploadimageToFileSystem"
    const formData = new FormData()
    formData.append("file", file)
    formData.append("fileName", file.name)
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "multipart/form-data",
      },
    }
    axios
      .post(url, formData, config)
      .then((response) => {})
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <button className="btn btn-primary">Increment</button>
      <h1>{counterValue}</h1>
      <button className="btn btn-primary">Decrement</button>
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default CounterExample
