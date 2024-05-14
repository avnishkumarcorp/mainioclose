import axios from "axios"

export const postQueryNoData = (URL) => {
  return axios.post(URL, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
}
