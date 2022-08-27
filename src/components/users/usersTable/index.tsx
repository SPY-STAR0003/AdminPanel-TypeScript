// react
import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { setUsers } from "../../../store/slices/users";

// components
import TableHeader from "./header";
import TableBody from "./body";
import { Category } from "../../../assets/icons/icons";

// types
import { UserType } from "../../../types/users";

// services
import { DeleteUser, GetUsers } from "../../../services/users";

const UsersTable : React.FC = () => {

  const users : UserType[] = useSelector((state : RootState ) => state.users.usersList )
  
  const dispatch = useDispatch<AppDispatch>()

  const deleteHandler = async (id : number) => {
    await DeleteUser(id)
    let newUsers = await GetUsers()
    dispatch(setUsers(newUsers))
  }

  return (
    <>
      <header className={"relative flex justify-center mt-4 mb-8"}>
        <Category classes="absolute top-3 md:hidden block left-0 w-8 h-8" color="#200E32"/>
        <h2 className={"first-letter:text-4xl first-letter:font-bold text-2xl text-gray-500"}> Website Users </h2>
      </header>
      <table className={"w-full"}>
        <TableHeader />
        <TableBody />
      </table>
    </>
  );
}

export default UsersTable;