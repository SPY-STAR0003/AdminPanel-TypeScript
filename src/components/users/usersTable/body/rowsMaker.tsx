// assets
import { Delete, Edit, Eye } from "../../../../assets/icons/icons";

// redux
import { RootState } from "../../../../store"
import { useSelector, useDispatch } from "react-redux";
import { toggleUserModal } from "../../../../store/slices/users";

// types
import {UserType} from "../../../../types/users";

interface RowsMakerProps {
    users : UserType[]
    deleteHandler : (name ?: string, id ?: number) => void
}

const RowsMaker : React.FC<RowsMakerProps> = ({users, deleteHandler}) => {

    const dispatch = useDispatch();

    return (
        <>
            {
                users?.map((item : UserType, index : number) => (
                    <tr onClick={() => dispatch(toggleUserModal(item))} key={index} className={`${Number.isInteger(index/2) ? "bg-gray-50/90" : "bg-white"} transition cursor-pointer hover:bg-gray-100 text-center`}>
                        <td className={"py-4 text-gray-500 w-1"}>{index+1}</td>
                        <td className={"py-4 text-gray-500"}> {item?.name} </td>
                        <td className={"py-4 text-gray-500 md:table-cell hidden"}> {item?.email} </td>
                        <td className={"py-4 text-gray-500 sm:table-cell hidden"}> {item?.role} </td>
                        <td className={"py-4 text-gray-500"}> {item?.status} </td>
                        <td className={"py-4 text-gray-500 flex justify-center space-x-4"}>
                            <Edit color="#4ade80" classes="w-6 h-6 md:table-cell hidden" />
                            <Delete onClick={() => deleteHandler(item.name, item.id)} color="#f43f5e" classes="w-6 h-6" />
                            <Eye onClick={() => dispatch(toggleUserModal(item))} color="#22d3ee" classes="w-6 h-6 md:table-cell hidden"/>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default RowsMaker;