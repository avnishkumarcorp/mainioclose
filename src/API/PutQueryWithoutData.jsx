import axios from "axios"

export const putQueryNoData = (URL,data) =>{
    return(
        axios.put(URL, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
        })
    )
}