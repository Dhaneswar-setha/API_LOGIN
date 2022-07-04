import React, { useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory, Link } from "react-router-dom";
import axiox from "axios";
import {useDispatch,useSelector} from "react-redux";
import {loginInitate} from "./redux/action";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));



const Login = ({ setLogoutUser }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("manager");


  let history = useHistory();
let dispatch =useDispatch();
const {user,error} = useSelector(state => state.auth);
useEffect(()=>{if(email === 'guru@thinkzone.in'  &&  password === 'GURUBBS21'){
  history.push("/filter");
}},[user]);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginInitate(email, password,usertype));

  };
  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Login Page</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={login}
      >
        <TextField
          id="username"
          label="Username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
      <p>
        Don't have an account then please do{" "}
        <Link to="/register">Register</Link> yourself
      </p>
    </div>
  );
};

export default Login;
