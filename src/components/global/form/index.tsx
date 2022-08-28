// react
import React, { useState, useRef } from "react";


// components
import FormHeader from "./header";

// types
import { AddUser } from "../../../assets/icons/icons";
import FormMain from "./form";

const AddUserForm : React.FC = () => {
    
    const [showAddUsersForm, setShowAddUsersForm ] = useState(false)

    return (
        <>
            <div className={`${showAddUsersForm ? "flex overflow-auto" : "hidden" } fixed items-center justify-center bg-white/60 w-full h-screen z-50`}>
                <div className={"relative flex items-center justify-center"}>
                    <div className={"flex flex-col items-center glass p-4 md:w-[50rem] sm:w-[30rem] w-[20rem] overflow-visible rounded-md"}>
                        <FormHeader />
                        <FormMain setShowAddUsersForm={setShowAddUsersForm} showAddUsersForm={showAddUsersForm} />
                    </div>
                </div>
            </div>
            <div onClick={() => setShowAddUsersForm(!showAddUsersForm)} className="fixed cursor-pointer right-0 bottom-0 m-8 p-2 border-2 rounded-full border-cyan-400 animate-heart bg-white">
                <AddUser classes="w-12 h-12" color="#22d3ee" />
            </div>
        </>

    )
}

export default AddUserForm;