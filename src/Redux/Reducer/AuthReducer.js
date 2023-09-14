const initialState = {
    currentUser:{},
    token : "",
}

export const AuthReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "CURRENT_USER":
            return {...state, currentUser: action.payload}
        case "TOKEN":{
            return {...state, token: action.payload}
        }
        default:
            return state
    }
}