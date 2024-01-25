import React from "react";
import "./LogoLeftPage.css";

const LogoLeftPage = () => {
    return (
        <>
        <div className="outerDiv">
            <div>
                <img src="/assets/logo.svg" className="logoImage" alt="" />
            </div>
            <div className="mainText">
                B<span className="mainTextBack">ASE</span>
            </div>
        </div>
        <div className="endDiv">
                <div className="socialDiv">
                    <img src="/assets/github.svg" className="socialLinks" alt="" />
                    <img src="/assets/twitter.svg" className="socialLinks" alt="" />
                    <img src="/assets/linkedin.svg" className="socialLinks" alt="" />
                    <img src="/assets/discord.svg" className="socialLinks" alt="" />
                </div>
            </div>
        </>
    )
}

export default LogoLeftPage;