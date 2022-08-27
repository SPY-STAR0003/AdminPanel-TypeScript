// react
import React from "react";

// assets
import { Home, Document, Users, Settings, Logout, Category} from "../../../assets/icons/icons";
import AdminPanelLogo from "../../../assets/images/administration.jpg"

// components
import NavBarLink from "./navLink";

// types
import { NavbarProps } from "../../../types/navbar";

const Navbar : React.FC<NavbarProps> = ({gridWidth}) => {

    return (
        <div className={`${gridWidth} md:block hidden`}>
            <div className={"space-y-3"}>
                <header>
                    <img className={"w-full"} src={AdminPanelLogo} alt="logo" />
                </header>
                <main className={"space-y-6 flex flex-col items-center"}>
                    <NavBarLink
                        to="/home"
                        Icon={Home}
                        name="home"
                    />
                    <NavBarLink
                        to="/users"
                        Icon={Users}
                        name="Users"
                    />
                    <NavBarLink
                        to="/articles"
                        Icon={Document}
                        name="articles"
                    />
                    <NavBarLink
                        to="/profile"
                        Icon={Settings}
                        name="Profile"
                    />
                    <NavBarLink
                        to="/logout"
                        Icon={Logout}
                        name="Log out"
                    />
                </main>
            </div>
        </div>
    )
}

export default Navbar;