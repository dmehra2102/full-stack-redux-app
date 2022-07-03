import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth_failure, auth_request, auth_success } from "../Redux/Authaction";
import { useNavigate } from "react-router";

function Login() {
      const dispatch = useDispatch();

      const navigate = useNavigate();
      const handlesubmit = () => {
            const payload = {
                  email: "eve.holt@reqres.in",
                  password: "cityslicka",
            };

            dispatch(auth_request());
            axios.post("https://reqres.in/api/login", payload)
                  .then((res) => dispatch(auth_success(res.data.token)))
                  .then(()=> navigate(-2,{replace:true}))
                  .catch(() => dispatch(auth_failure()));
      };

      return (
            <div>
                  <input type="text" defaultValue={"eve.holt@reqres.in"} />
                  <input type="password" defaultValue={"cityslicka"} />
                  <button onClick={handlesubmit}>Login</button>
            </div>
      );
}

export default Login;
