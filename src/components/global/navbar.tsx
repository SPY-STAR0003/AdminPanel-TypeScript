// react
import React from "react";
import { NavLink } from "react-router-dom";

// pages
import HomePage from "../../pages/home";

// nextUI
import { Link } from "@nextui-org/react";

// libraries

// assets
import Home from "../../assets/icons/home.svg";
import Document from "../../assets/icons/document.svg";
import Users from "../../assets/icons/users.svg";
import Setting from "../../assets/icons/setting.svg";
import Logout from "../../assets/icons/logout.svg";
import AdminPanelLogo from "../../assets/icons/administration.jpg"

const Navbar : React.FC = () => {

    return (
        <div className="navbar">
            <div>
                <h2 className={"title"}>
                    <img src={AdminPanelLogo} alt="logo" />
                </h2>
                <NavLink to="/home" className={"navbarItem"}>
                    <img src={Home} alt="Home" />
                    <span> Home </span> 
                </NavLink>
                <NavLink to="/users" className={"navbarItem"}> 
                    <img src={Users} alt="users" />
                    <span> Users </span> 
                </NavLink>
                <NavLink to="/articles" className={"navbarItem"}> 
                    <img src={Document} alt="articles" />
                    <span> Articles </span> 
                </NavLink>
                <NavLink to="/profile" className={"navbarItem"}> 
                    <img src={Setting} alt="settings" />
                    <span> Profile </span> 
                </NavLink>
                <NavLink to="/login" className={"navbarItem"}> 
                    <img src={Logout} alt="Logout" />
                    <span> Log Out </span> 
            </NavLink>
            </div>
        </div>
    )
}

export default Navbar;