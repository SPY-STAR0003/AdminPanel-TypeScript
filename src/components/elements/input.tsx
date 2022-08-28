// react
import React from "react";

// next ui
import { useField } from "formik";

// types
import { FormValues } from "../../types/form"

interface Props {
    name : string
    label : string
    placeholder : string
    type : string
}

const MyInput : React.FC<Props> = ({ ...props }) => {

    const [ field, meta] = useField(props)

    return (
        <div className="flex flex-col relative m-4">
            <input
                className={"p-2 outline-none bg-transparent border-b-2 focus:border-b-gray-400 transition animate__rubberBand border-b-gray-100"}
                {...props}
                {...field}
            />
            {
                meta.touched && meta.error
                ? <span className="pl-3 pt-3 text-rose-400 text-[.9rem] font-medium"> {meta.error} </span>
                : null
            }
        </div>
    )
} 

export default MyInput;