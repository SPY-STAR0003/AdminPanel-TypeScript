// react
import React, { useState, useEffect } from "react";

// components
import Navbar from "../components/global/navbar";
import Users from "../components/users";
import AddUserForm from "../components/global/form";
import UserModal from "../components/users/userModal";

// redux
import { useSelector } from "react-redux";

// assets
import { Category } from "../assets/icons/icons";

// types
import { RootState } from "../store";

const UsersPage : React.FC = () => {

    const [showNavbar, setShowNavbar] = useState(false);

    const showUserModal = useSelector((state : RootState) => state.users.showUserModal)

    useEffect(() => {
        if(window.innerWidth >= 768) {
            setShowNavbar(true)
        }
    }, [])

    return (
        <div className={"relative grid grid-cols-12"}>
            {
                showNavbar && <Navbar onClick={() => setShowNavbar(!showNavbar)} gridWidth={`lg:col-span-2 md:col-span-1`} />
            }
            {
                showUserModal && <UserModal />
            }
            <Category onClick={() => setShowNavbar(!showNavbar)} classes="absolute top-6 md:hidden block left-3 w-8 h-8 z-40" color="#200E32"/>
            <Users gridWidth={"lg:col-span-10 md:col-span-11 col-span-12"} />
            <AddUserForm />
        </div>
    )
}

export default UsersPage;