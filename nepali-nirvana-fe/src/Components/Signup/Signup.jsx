import React, { useRef } from "react";
import classes from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  function signupHandler(e) {
    e.preventDefault();
    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      gender: genderRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data?.error) {
          messageRef.current.textContent = data.error;
          return;
        }
        messageRef.current.textContent = data.success;
        messageRef.current.style.color = "green";
        firstNameRef.current.value =
          lastNameRef.current.value =
          genderRef.current.value =
          emailRef.current.value =
          passwordRef.current.value =
            "";
      })
      .catch((err) => {
        messageRef.current.textContect = "Something went wrong!";
      });
  }

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const genderRef = useRef();
  const concentRef = useRef();
  const messageRef = useRef();

  const navigate = useNavigate();

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
      <div className={classes.Signupcontainer}>
        <div className={classes.Signupform}>
          <h1>Create new account</h1>

          <form action="" onSubmit={signupHandler}>
            <input type="text" placeholder="Firstname" ref={firstNameRef} />
            <input type="text" placeholder="Lastname" ref={lastNameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passwordRef} />
            <label htmlFor="">Gender</label>
            <select ref={genderRef}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </form>
          <p className={classes.check}>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="checkValue"
              ref={concentRef}
            />
            Click here to agree to our Terms and Conditions.
          </p>
          <div ref={messageRef} style={{ color: "red" }}></div>
          <button onClick={signupHandler}>Sign up</button>
          <p className={classes.already}>
            Already a Member ? <Link to="/login">Log in</Link>
          </p>
        </div>
        <div className={classes.Signupimagecontainer}></div>
      </div>
    </>
  );
}

export default Signup;
