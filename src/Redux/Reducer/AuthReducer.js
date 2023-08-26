const initialState = {
    userInfo:{},
    token : "",
}

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "USERINFO":
            return {...state, userInfo: action.payload}
        case "TOKEN":{
            return {...state, token: action.payload}
        }
        default:
            return state
    }
}