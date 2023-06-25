import React from "react";
import classes from "./signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  function handlesubmit(e){
    e.preventDefault();
  }
  return (
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
        <p>
        <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkValue"/> By Creating an account, you agree to our <Link>Terms</Link> <br />
          and have read acknowledge <br /> the <Link>Global Privacy Statement</Link>
        </p>
        <button>Sign Up</button>
        <p>
          Already A Member ? <Link to="/login">Log in</Link>
        </p>
      </div>
      <div className={classes.Signupimagecontainer}>
        <h1>
          Sign up now !!<br /> Embark on a journey of wanderlust and adventure
        </h1>
      </div>
    </div>
  );
};

export default Signup;
