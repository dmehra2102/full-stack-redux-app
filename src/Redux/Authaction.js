export const auth_request = ()=> {
    return {
        type : "AUTH_REQUEST"
    }
};

export const auth_success = (token)=> {
    return {
        type : "AUTH_SUCCESS",
        payload : token
    }
};

export const auth_failure = ()=> {
    return {
        type : "AUTH_FAILUE",
    }
};