import React from "react";
import classes from "./signup.module.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
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
      <div className={classes.Signupcontainer}>
        <div className={classes.Signupform}>
          <h1>Create new account</h1>

          <form action="" onSubmit={handlesubmit}>
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <label htmlFor="">Gender</label>
            <select>
              <option value="option1">Male</option>
              <option value="option2">Female</option>
              <option value="option3">Other</option>
            </select>
          </form>
          <p className={classes.check}>
            <input
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="checkValue"
            />
            Click here to agree to our Terms and Conditions.
          </p>
          <button>Sign up</button>
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
