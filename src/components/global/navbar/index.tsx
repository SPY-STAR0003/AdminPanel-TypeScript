// react
import React from "react";

// assets
import { Home, Document, Users, Settings, Logout} from "../../../assets/icons/icons";
import AdminPanelLogo from "../../../assets/images/administration.jpg"

// components
import NavBarLink from "./navLink";

// types
import { NavbarProps } from "../../../types/navbar";

const Navbar : React.FC<NavbarProps> = ({gridWidth, onClick}) => {

    return (
        <div className={`${gridWidth} md:static fixed bg-white/70 w-full sm:w-1/3 md:w-full h-full backdrop-blur-md overflow-y-auto animate-transformToRight z-30`}>
            <div className={"space-y-3 relative"}>
                <span onClick={() => onClick()} className={"md:hidden absolute top-0 right-3 rotate-45 text-6xl text-gray-600 hover:text-gray-300"}>
                    +
                </span>
                <header className={"flex items-center justify-center"}>
                    <img className={"w-36 h-36 md:w-full md:h-auto rounded-full"} src={AdminPanelLogo} alt="logo" />
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