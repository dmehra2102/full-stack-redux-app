import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authreducer";
import { BookReducer } from "./Bookreducer";


const rootReducer = combineReducers({
    auth : authReducer,
    book : BookReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));