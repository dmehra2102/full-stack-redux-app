const init = {
    isLoading : false,
    Books : [],
    isError : false,
};

export const BookReducer = (state=init,{type,payload})=> {
    switch (type) {
        case "BOOK_REQUEST":
            return {...state, isLoading : true};
        case "BOOK_SUCCESS":
            return {...state, Books : payload};
        case "BOOK_FAILURE":
            return {...state, isError : true};    
        default:
            return state;
    }
}