import React from "react";
import { FcGoogle } from "react-icons/fc";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div
        className={classes.home}
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        Home
      </div>
      <div className={classes.logincontainer}>
        <div className={classes.imagecontainer}></div>
        <div className={classes.rightcontainer}>
          <h1>Welcome Back</h1>
          <p>
            Today is a new day. It's your day. <br />
            Login in to start managing your traveling.
          </p>
          <form onSubmit={handlesubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className={classes.signinbtn}>Login</button>
          </form>
          <hr className={classes.hr} />
          <p>or</p>
          <button className={classes.googlebtn}>
            <FcGoogle />
            Login with Google
          </button>
          <p className={classes.gotosignup}>
            Don't you have an account? <Link to="/signup"> Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
