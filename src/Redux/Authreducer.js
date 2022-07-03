const init = {
    auth : false,
    token : "",
    isError : false,
};

export const authReducer = (state=init,{type,payload})=> {
    switch (type) {
        case "AUTH_REQUEST":
            return {...state, auth : true};
        case "AUTH_SUCCESS":
            return {...state, token : payload};
        case "AUTH_FAILURE":
            return {...state, isError : true};    
        default:
            return state;
    }
}