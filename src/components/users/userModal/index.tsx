// react
import React from "react";

// assets
import { User } from "../../../assets/icons/icons";

// components
import Text from "../../elements/text";

// redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { toggleUserModal } from "../../../store/slices/users";

// type
import { UserType } from "../../../types/users";

const UserModal : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const user : UserType = useSelector((state : RootState) => state.users.showingUser)

    return (
        <div className={"fixed flex bg-white/70 w-full h-full items-center justify-center top-0 left-0 z-50"}>
            <div className="relative">
                <span onClick={() => dispatch(toggleUserModal(user))} className={"absolute cursor-pointer top-0 right-3 rotate-45 text-6xl z-50 text-gray-600 hover:text-gray-300"}> + </span>
                <div className={"flex flex-col p-8 backdrop-blur-md glass w-[48rem] h-[28rem]"}>
                    <header className={"text-center"}>
                        <h2 className={"text-4xl text-gray-700 font-semibold"}> {user.name} </h2>
                    </header>
                    <main className={"flex justify-around py-8 px-4"}>
                        <div className="space-y-6">
                            <Text text={user.name} label={"Name :"} />
                            <Text text={user.email} label={"E-mail :"} />
                            <Text text={user.phone} label={"Phone :"} />
                            <Text text={user.role} label={"Role :"} />
                            <Text text={user.status} label={"Status :"} />
                        </div>
                        <div className={"flex bg-gray-100 rounded-full p-8 border border-gray-500 outline outline-offset-2 outline-gray-300/50 items-center justify-center self-center justify-self-center"}>
                            <User classes="w-32 h-32 transition hover:scale-110" color="#6b7280" />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default UserModal;