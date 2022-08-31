// react
import React from "react";

// assets
import noConnenction from "./../../../assets/icons/No-Connection.gif";
import noUsers from "./../../../assets/icons/noUsers.gif";

// types
import {UserType} from "../../../types/users";
import { Delete, Edit, Eye } from "../../../assets/icons/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteSwal } from "../../../modules/swal";
import useSWR from "swr";

const TableBody : React.FC = () => {

    const dispatch = useDispatch()
    const errorStatusCode = useSelector((state : any) => state?.users?.error?.status)
    const users = useSelector((state : any) => state?.users?.usersList)
    const mutate = useSelector((state : any) => state?.users?.mutate)

    const deleteHandler = async (name ?: string , id ?: number) => {
        const deleteUser : boolean = await deleteSwal(name, id)
        
        if(deleteUser) {
            mutate()
        }
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
                        ?
                            <tr>
                                <td colSpan={6}>
                                    <div className="flex flex-col items-center justify-center">
                                        <img className="w-96 h-96" src={noUsers} alt="There is No Users ..." />
                                        <span className={"text-sky-600 text-lg font-semibold"}> Your users list is empty ! </span>
                                    </div>
                                </td>
                            </tr>
                        : 
                            users?.map((item : UserType, index : number) => (
                                <tr key={index} className={`${Number.isInteger(index/2) ? "bg-gray-50/90" : "bg-white"} transition cursor-pointer hover:bg-gray-100 text-center`}>
                                    <td className={"py-4 text-gray-500 w-1"}>{index+1}</td>
                                    <td className={"py-4 text-gray-500"}> {item?.name} </td>
                                    <td className={"py-4 text-gray-500 md:table-cell hidden"}> {item?.email} </td>
                                    <td className={"py-4 text-gray-500 sm:table-cell hidden"}> {item?.role} </td>
                                    <td className={"py-4 text-gray-500"}> {item?.status} </td>
                                    <td className={"py-4 text-gray-500 flex justify-center space-x-4"}>
                                        <Edit color="#4ade80" classes="w-6 h-6 md:table-cell hidden" />
                                        <Delete onClick={() => deleteHandler(item.name, item.id)} color="#f43f5e" classes="w-6 h-6" />
                                        <Eye color="#22d3ee" classes="w-6 h-6 md:table-cell hidden"/>
                                    </td>
                                </tr>
                ))
            }
        </tbody>
    )
}

export default TableBody;