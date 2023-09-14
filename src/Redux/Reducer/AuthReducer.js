const initialState = {
    currentUser:{},
    token : "",
    forgetPassword: {},
    isUserExist: {},
}

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "CURRENT_USER":
            return {...state, currentUser: action.payload}
        case "TOKEN":{
            return {...state, token: action.payload}
        }
        case "Forget_Password":{
            return {...state, forgetPassword: action.payload}
        }
        case "User_Exist":{
            return {...state, isUserExist: action.payload}
        }
        default:
            return state
    }
}