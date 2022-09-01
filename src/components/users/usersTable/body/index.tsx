// react
import React from "react";

// assets
import noConnenction from "../../../../assets/icons/noConnection.gif";

// libraries
import useSWR from "swr";
import { deleteSwal } from "../../../../modules/swal";

// redux
import { RootState } from "../../../../store"
import { useSelector, useDispatch } from "react-redux";

// services
import { GetUsersWithSWR } from "../../../../services/users";

// types
import RowsMaker from "./rowsMaker";
import EmptyTable from "./emptyTable";

const TableBody : React.FC = () => {

    const dispatch = useDispatch();
    const errorStatusCode = useSelector((state : RootState) => state?.users?.errorGetUsers?.status)
    const {usersList : users , page} = useSelector((state : RootState) => state?.users)
    
    const { mutate } = useSWR(
        ["https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript", page],
        GetUsersWithSWR
    )

    const deleteHandler = async (name ?: string , id ?: number) => {
        const deleteUser : boolean = await deleteSwal(name, id)

        // if deleteUser is true that mean is request was successful then we refresh the list !
        // ! FOR MYSELF : Redefine useSWR for mutate the code ...
        if(deleteUser) mutate()
    }

    return (
        <tbody>
            {
                errorStatusCode === 404
                    ?
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <img src={noConnenction} alt="Loading" />
                            <span className={"text-sky-600 text-lg font-semibold"}> Getting data form server ... </span>
                        </div>
                    :  users?.length === 0
                        ? <EmptyTable />
                        : <RowsMaker deleteHandler={deleteHandler} users={users} />

            }
        </tbody>
    )
}

export default TableBody;