import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import api from "../api";
import "./signUp.css";
import signUpBg from "./assets/images/34929.jpg";

const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const onClick = async () => {
    try {
      const r = await api.register(user);
      console.log(r.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signUpContainer">
      {/* <h1 className="logo">Logo</h1> */}
      <div className="imageSection">
        <img src={signUpBg} className="signUpBgImage"></img>
      </div>
      <div className="signUpSection">
        <div className="signUpWrapper">
          <h1 className="web">Get Started</h1>
          <h1 className="mob">SingUp</h1>
          <p  className="web" style={{ color: "lightgray" }}>Let's get going</p>
          <h3 className="web">signUp</h3>
          <div className="signUpInputsWrapper">
            <TextField
              name="name"
              onChange={onChange}
              placeholder="Full Name"
              label="Full Name"
              variant="outlined"
              id="signUpInputs"
              type="text"
            />
          </div>
          <div className="signUpInputsWrapper">
            <TextField
              name="email"
              onChange={onChange}
              placeholder="Email"
              label="Email"
              variant="outlined"
              id="signUpInputs"
              type="email"
            />
          </div>
          <div className="signUpInputsWrapper">
            {" "}
            <TextField
              name="password"
              onChange={onChange}
              placeholder="Password"
              label="Password"
              variant="outlined"
              id="signUpInputs"
              type="password"
            />
          </div>
          <div className="signUpButtonWrapper">
            <Button onClick={onClick} id="signUpButton" variant="contained">
              signUp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
