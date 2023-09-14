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