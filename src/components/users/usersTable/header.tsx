// react
import React from "react";

// schemas
import { tableColumns } from "../../../schema/users"


const TableHeader : React.FC = () => {
    return (
        <thead>
            <tr>
                {
                    tableColumns.map((item, index) => (
                        <th key={index} className={`py-4 justify-center text-gray-600 ${item.name === "E-mail" ? "md:table-cell hidden" : ""} ${item.name === "Role" ? "sm:table-cell hidden" : ""}`}> {item.name} </th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default TableHeader;