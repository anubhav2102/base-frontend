import React from "react";
import LogoLeftPage from "./leftPart/LogoLeftPage.jsx";
import LoginRightPage from "./rightPart/LoginRightPage.jsx";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="slanted-container">
        <div className="left-side" style={{ backgroundColor: "#605BFF" }}>
          <LogoLeftPage />
        </div>
        <div className="right-side" style={{ backgroundColor: "#F8FAFF" }}>
          <LoginRightPage />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
