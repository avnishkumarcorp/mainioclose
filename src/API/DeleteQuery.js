import axios from "axios"

export const deleteQuery = (URL) =>{
    return(
        axios.delete(URL, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
        })
    )
}

