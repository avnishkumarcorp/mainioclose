export const userInformation = (data) =>{
    return {
        type: "USERINFO",
        payload: data,
    }
}

export const userToken = (data) =>{
    return {
        type: "TOKEN",
        payload: data,
    }
}