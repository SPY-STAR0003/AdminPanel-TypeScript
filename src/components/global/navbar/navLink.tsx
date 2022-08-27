// react
import React from "react";
import { NavLink } from "react-router-dom";


interface NavBarLinkProps {
    to : string,
    Icon : any,
    name: string,
}

const NavBarLink : React.FC<NavBarLinkProps> = ({to, Icon, name}) => {
    return (
        <NavLink to={to} className={"flex items-center hover:-translate-y-[2px] hover:text-gray-900 transition duration-300 hover:bg-gray-100 w-2/3 space-x-2 text-gray-700 py-3 lg:px-6 justify-center lg:justify-start rounded-lg"}> 
            <Icon classes={"w-6"} color={"#200E32"}/>
            <span className={"lg:block hidden"}> {name} </span> 
        </NavLink>
    )
}

export default NavBarLink;