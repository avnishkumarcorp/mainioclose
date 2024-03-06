



export const forgetPasswordAction = (data) =>{
    return {
        type: "Forget_Password",
        payload: data,
    }
}

export const userIsPresentData = (data) =>{
    return {
        type: "User_Exist",
        payload: data,
    }
}