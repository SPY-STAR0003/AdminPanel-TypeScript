// schema
import { Delete, Edit, Eye } from "../../../assets/icons/icons";

const TableBody = () => {

    return (
        <tbody>
            {
                Array.from(Array(9).keys()).map((index : number) => (
                    <tr key={index} className={`${Number.isInteger(index/2) ? "bg-gray-50/90" : "bg-white"} transition cursor-pointer hover:bg-gray-100 text-center`}>
                        <td className={"py-4 text-gray-500 w-1"}>1</td>
                        <td className={"py-4 text-gray-500"}> name </td>
                        <td className={"py-4 text-gray-500 md:table-cell hidden"}> mohammadzourmand@gmail.com </td>
                        <td className={"py-4 text-gray-500 sm:table-cell hidden"}> Eletericion Tecnision </td>
                        <td className={"py-4 text-gray-500"}> Active </td>
                        <td className={"py-4 text-gray-500 flex justify-center space-x-4"}>
                            <Edit classes="w-6 md:block hidden" color="#4d7c0f" />
                            <Delete classes="w-6 md:block hidden" color="#e11d48" />
                            <Eye classes="w-6" color="#0ea5e9"  />
                        </td>
                    </tr>
                ))
            }
        </tbody>
    )
}

export default TableBody;