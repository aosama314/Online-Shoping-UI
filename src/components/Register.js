import { TextField } from "@mui/material";
import React from "react";

const Register = (props) => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const registerUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, email, password);
  };

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
