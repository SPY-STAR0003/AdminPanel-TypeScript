// react
import React , {useEffect} from "react";
import UsersTable from "./usersTable";

// services
import { GetUsers } from "../../services/users";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setUsers } from "../../store/slices/users";

const Users : React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()

    const setUsersToState : () => void = async () => {
        let users = await GetUsers();
        dispatch(setUsers(users))
    }

    useEffect(() => {
        setUsersToState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="users p-4">
            <UsersTable />
        </div>
    )
}

export default Users;