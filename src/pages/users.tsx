// react
import React from "react";

// components
import Navbar from "../components/global/navbar";
import Users from "../components/users";
import AddUserForm from "../components/global/form";

const UsersPage : React.FC = () => {
    return (
        <div className={"relative grid grid-cols-12"}>
            <Navbar gridWidth={"lg:col-span-2 md:col-span-1"} />
            <Users gridWidth={"lg:col-span-10 md:col-span-11 col-span-12"} />
            <AddUserForm />
        </div>
    )
}

export default UsersPage;