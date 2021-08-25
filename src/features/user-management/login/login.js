import "./login.css";
import api from "../api";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import loginBg from "./assets/images/9800.png";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const history = useHistory();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const onClick = async () => {
    try {
      const r = await api.authenticate(user);
      localStorage.setItem("token", r.data.token);
      history.push("/");
      console.log(r.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginContainer">
      <h1 className="logo">Logo</h1>
      <div className="imageSection">
        <img src={loginBg} className="loginBgImage"></img>
      </div>
      <div className="loginSection">
        <div className="loginWrapper">
          <h1 style={{ position: "absolute", top: "10%" }}>Get Started</h1>
          <p style={{ position: "absolute", top: "16%", color: "lightgray" }}>
            Let's get going
          </p>
          <h3>Login</h3>
          <div className="loginInputsWrapper">
            <TextField
              name="email"
              onChange={onChange}
              placeholder="Email"
              label="Email"
              variant="outlined"
              id="loginInputs"
              type="email"
            />
          </div>
          <div className="loginInputsWrapper">
            {" "}
            <TextField
              name="password"
              onChange={onChange}
              placeholder="Password"
              label="Password"
              variant="outlined"
              id="loginInputs"
              type="password"
            />
          </div>
          <div className="loginButtonWrapper">
            <Button onClick={onClick} id="loginButton" variant="contained">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
