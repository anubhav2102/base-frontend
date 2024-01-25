import React from "react";
import "./LoginRightPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginRightPage = () => {
  let navigate = useNavigate();
  const handleChangePage = () => {
    navigate("/dashboard");
  }

  return (
    <div style={{zIndex: "999999"}} className='Login'>
      <div className='rightSide'>
        <div className='formContainer'>
          <p className='heading'>Sign In</p>
          <p className='signIn'>Sign in to your account</p>
          <div className='accounts'>
            <button>
            <img src="/assets/google.svg" style={{height: "19px"}} alt="" /> <span style={{color: "slategrey", fontSize: "11px"}}>Sign in with Google</span>
            </button>
            <button>
              {" "}
              <img src="/assets/apple.svg" style={{height: "19px"}} alt="" /> <span style={{color: "slategrey", fontSize: "11px"}}>Sign in with Apple</span>
            </button>
          </div>
          <form className='form'>
            <label>Email address</label>
            <input type="email" placeholder="johndoe@gmail.com" />
            <label>Password</label>
            <input type="password" placeholder="password" />
            <Link style={{textDecoration: "none", color: "#346BD5"}}>Forgot password?</Link>
            <input onClick={handleChangePage} style={{backgroundColor: "#605BFF", color: "#FFFFFF", fontFamily: "Montserrat", fontWeight: 700, cursor: "pointer"}} type="submit" value="Sign In"/>
          </form>
          <p style={{ marginTop: "20px", textAlign: "center" }} className="bottom_line">
            <span style={{color: "grey"}} className="dontHaveAccount">Don't have an account? </span>
            <Link style={{textDecoration: "none", color: "#346BD5"}} href="#" className="registerHere">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRightPage;
