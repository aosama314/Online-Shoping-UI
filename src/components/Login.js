import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInUser,
  userSelector,
  clearState,
} from "../store/slices/userSlice";

import { TextField } from "@mui/material";

import { toast } from "react-toastify";

const Login = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = { email, password };

    dispatch(signInUser(user));
  };

  useEffect(() => {
    console.log(errorMessage);
    if (isSuccess) {
      console.log("Success");
      toast.success("Login Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearState());
    }
    if (isError) {
      toast.error("Login Failed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
          <TextField
            id="email"
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            placeholder="abc@domain.com"
            inputRef={emailRef}
            type="email"
          />
        </div>
        <div className="inputGroup">
          <TextField
            id="password"
            placeholder="Your Password"
            fullWidth
            label="Password"
            variant="outlined"
            size="small"
            inputRef={passwordRef}
            type="password"
          />
        </div>
        <button onClick={loginUser} className="formButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
