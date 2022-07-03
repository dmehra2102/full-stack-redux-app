import React from 'react';
import {useSelector} from "react-redux";
import { Navigate } from 'react-router';

function PrivateComponent({children}) {
    const {auth} = useSelector((state)=> state.auth)
    if(auth){
        return children;
    }
    else{
        return <Navigate to={"/login"}/>
    }
  
}

export default PrivateComponent