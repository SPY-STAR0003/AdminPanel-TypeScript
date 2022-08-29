// react
import React from "react";
import UsersTable from "./usersTable";

interface UsersProps {
    gridWidth: string | "col-span-9",
}

const Users : React.FC<UsersProps> = ({gridWidth}) => {

    return (
        <div className={`${gridWidth} p-4`}>
            <UsersTable />
        </div>
    )
}

export default Users;