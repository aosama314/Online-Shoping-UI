import React, { useEffect } from "react";
import { TextField } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  signUpUser,
  userSelector,
  clearState,
} from "../store/slices/userSlice";

const Register = (props) => {
  const dispatch = useDispatch();
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const registerUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const user = { name, email, password };

    dispatch(signUpUser(user));

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
      dispatch(clearState());
    }
    if (isError) {
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <TextField
            id="fullName"
            fullWidth
            label="Full Name"
            variant="outlined"
            size="small"
            placeholder="Your Full Name"
            inputRef={nameRef}
            type="text"
          />
        </div>
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
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
};

export default Register;
