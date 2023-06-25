import React from "react";
import { FcGoogle } from "react-icons/fc";
import classes from "./Login.module.css";
import { Link } from 'react-router-dom';



const Login = (props) => {
  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={classes.logincontainer}>
      <div className={classes.imagecontainer}>
        <h1>
          TRAVEL IS THE ONLY THING <br />
          YOU BUY THAT MAKES YOU <br /> RICHER
        </h1>
      </div>
      <div className={classes.rightcontainer}>
        <h1>Welcome Back</h1>
        <p>Today is a new day. It's your day. <br />
        Login in to start managing your traveling.
        </p>
        <form onSubmit={handlesubmit}>
         <input type="text"placeholder="Email" />
         <input type="Password"placeholder="Password" />
         <button className={classes.signinbtn}>Sign in</button> 
        </form>
        <hr/>
        <p>or</p>
        <button className={classes.googlebtn}><FcGoogle/>Login with Google</button>
        <p>Don't you have an account?<Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
