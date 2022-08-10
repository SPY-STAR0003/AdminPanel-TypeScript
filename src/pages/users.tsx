// react
import React from "react";

// components
import Navbar from "../components/global/navbar";
import Users from "../components/users";
import AddUserForm from "../components/global/form";

const UsersPage : React.FC = () => {
    return (
        <div className={"usersPage dFlex"}>
            <Navbar />
            <Users />
            <AddUserForm />
        </div>
    )
}

export default UsersPage;