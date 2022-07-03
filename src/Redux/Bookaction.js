import axios from "axios";

export const book_request = ()=> {
    return {
        type : "BOOK_REQUEST"
    }
};

export const book_success = (data)=> {
    return {
        type : "BOOK_SUCCESS",
        payload : data
    }
};

export const book_failure = ()=> {
    return {
        type : "BOOK_FAILUE",
    }
};

export const getBooks = (params)=> (dispatch)=> {
    dispatch(book_request());
    axios.get("http://localhost:8080/Books",params)
    .then((res)=> dispatch(book_success(res.data)))
    .catch(()=> dispatch(book_failure()));
}