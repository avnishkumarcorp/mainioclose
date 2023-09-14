export const currentUserAction = (data) =>{
    return {
        type: "CURRENT_USER",
        payload: data,
    }
}

export const userTokenAction = (data) =>{
    return {
        type: "TOKEN",
        payload: data,
    }
}