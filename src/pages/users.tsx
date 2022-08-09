// react
import React from "react";

// components
import Navbar from "../components/global/navbar";
import Users from "../components/users";

const UsersPage : React.FC = () => {
    return (
        <div className={"usersPage dFlex"}>
            <Navbar />
            <Users />
        </div>
    )
}

export default UsersPage;