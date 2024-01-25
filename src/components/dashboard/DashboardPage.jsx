import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar/Sidebar.jsx";
import UploadPage from "./upload/UploadPage.jsx";
import "./DashboardPage.css";

const DashboardPage = () => {
    const [menu, setMenu] = useState(false);

    const handleMenuStatus = (e) => {
        console.log(e);
        setMenu(e);
    }
    useEffect(()=>{
        if(window.innerWidth < 768 && menu===false){
            let left = document.getElementById("leftBar");
            left.style.height = "12vh";
        }else if(window.innerWidth < 768 && menu===true){
            let left = document.getElementById("leftBar");
            left.style.height = "100vh";
        }else{
            let left = document.getElementById("leftBar");
            left.style.height = "142vh";
        }
    },[menu])
    return (
        <>
        <div className="mainDiv">
            <div className="left_side_sidebar" id="leftBar"><Sidebar menuStatus={handleMenuStatus} /></div>
            <div className="right_side_upload" id="rightBar"><UploadPage menuStatus={menu} /></div>
        </div>
        </>
    );
};

export default DashboardPage;