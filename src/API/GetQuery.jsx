import axios from "axios"

export const getQuery = (URL) =>{
    return(
        axios.get(URL, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
        })
    )
}
