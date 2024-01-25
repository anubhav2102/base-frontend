import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({menuStatus}) => {
    const [menu, setMenu] = useState(false);

    const handleBurger = () => {
        setMenu(true)
        menuStatus(true)
        let close = document.getElementById("closeIconSidebar");
        close.style.display = "block";
        const burgerIcons = document.getElementsByClassName("burgerIcon");
    for (let i = 0; i < burgerIcons.length; i++) {
        burgerIcons[i].style.display = "none";
    }
    }
    const closeBurger = () => {
        setMenu(false);
        menuStatus(false)
        let close = document.getElementById("closeIconSidebar");
        close.style.display = "none";
        const burgerIcons = document.getElementsByClassName("burgerIcon");
        for (let i = 0; i < burgerIcons.length; i++) {
            burgerIcons[i].style.display = "block";
        }
    }
    return (
        <>
        <div>
            <div className="topLeftBar">
                <div><img src="/assets/burger.png" onClick={handleBurger}  className="burgerIcon" alt="" /></div>
                <div><img src="/assets/coloredLogo.svg" className="logoImageSidebar" alt="" /></div>
                <div className="logoHeading">Base</div>
                <div id="closeIconSidebar" style={{position: "absolute", right: "-222%", top: "13%", display: "none"}}>
                    <img onClick={closeBurger} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYQx5F-cdtTHKy2KTRIk6o2GnGDKFYU5xdw&usqp=CAU" style={{height: "36px", cursor: "pointer"}} alt="" />
                </div>
                {
                    (!menu && window.innerWidth < 768) && (
                        <div className="imagesUploadTop">
                            <img src="/assets/Notify.svg" style={{height: "23px", marginRight: "10px"}} alt="" />
                            <img src="/assets/Avatar.svg" style={{height: "25px", borderRadius: "100%"}} alt="" />
                        </div>
                    )
                }
            </div>
            {
               ((window.innerWidth < 768 && menu) || window.innerWidth >= 768) && (
                    <div style={{marginLeft: "15px"}} className="sideNavBarMenu">
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.2"}}></div> */}
                    <img src="/assets/DashboardIcon.svg" style={{height: "18px"}} alt="" />
                    {/* <div style={{flex: "0.05"}}></div> */}
                    <span style={{marginLeft: "8px", fontSize: "15px", color: "grey"}}>Dashboard</span>
                </div>
                <div className="sidebarNav" style={{boxShadow: "rgb(156, 156, 300) -93px 0px 7px"}}>
                    {/* <div style={{flex: "0.2"}}></div> */}
                <img src="/assets/UploadIcon.svg" style={{height: "18px", filter: "invert(9%) sepia(97%) saturate(6735%) hue-rotate(245deg) brightness(94%) contrast(146%)"}} alt="" />
                    <span style={{marginLeft: "8px",fontSize: "15px", color: "blue"}}>Upload</span>
                </div>
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.2"}}></div> */}
                <img src="/assets/Invoice.svg" style={{height: "18px", marginRight: "4px", filter: "invert(94%) sepia(8%) saturate(169%) hue-rotate(173deg) brightness(89%) contrast(89%)"}} alt="" />
                {/* <div style={{flex: "0.05"}}></div> */}
                    <span style={{marginLeft: "3px",fontSize: "15px", color: "grey"}}>Invoice</span>
                </div>
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.2"}}></div> */}
                <img src="/assets/Schedule.svg" style={{height: "18px"}} alt="" />
                {/* <div style={{flex: "0.05"}}></div> */}
                    <span style={{marginLeft: "10px",fontSize: "15px", color: "grey"}}>Schedule</span>
                </div>
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.2"}}></div> */}
                <img src="/assets/Calendar.svg" style={{height: "18px"}} alt="" />
                {/* <div style={{flex: "0.05"}}></div> */}
                    <span style={{marginLeft: "10px",fontSize: "15px", color: "grey"}}>Calendar</span>
                </div>
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.1"}}></div> */}
                <img src="/assets/Notification.svg" style={{height: "18px"}} alt="" />
                {/* <div style={{flex: "0.05"}}></div> */}
                    <span style={{marginLeft: "10px",fontSize: "15px", color: "grey"}}>Notification</span>
                </div>
                <div className="sidebarNav">
                    {/* <div style={{flex: "0.1"}}></div> */}
                <img src="/assets/Settings.svg" style={{height: "18px"}} alt="" />
                {/* <div style={{flex: "0.0"}}></div> */}
                    <span style={{marginLeft: "10px",fontSize: "15px", color: "grey"}}>Settings</span>
                </div>
            </div>
                )
            }
        </div>
        </>
    )
}

export default Sidebar;