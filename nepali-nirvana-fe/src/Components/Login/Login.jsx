import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const messageRef = useRef();

  function googleLogin(e) {
    e.preventDefault();
    window.location.href = "http://localhost:8000/login/google";
  }
  function handlesubmit(e) {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data?.error) {
          messageRef.current.textContent = data.error;
        }
        if (data.success) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        messageRef.current.textConent = "Something went wrong";
      });
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
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className={classes.signinbtn} onClick={handlesubmit}>
              Login
            </button>
          </form>
          <div style={{ color: "red" }} ref={messageRef}></div>
          <hr className={classes.hr} />
          <p>or</p>
          <button className={classes.googlebtn} onClick={googleLogin}>
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
