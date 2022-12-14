// react
import React from "react";

// libraries
import { useField, Formik, FormikErrors, Form, Field, ErrorMessage } from "formik";

// nextUI

interface Props {
    label : string,
    items: string[],
    name: string,
}

const MySelect : React.FC<Props> = ({...props}) => {

    return (
        <div className="p-2">
            <label> {props.label} </label>
            <select name={props.name} className={"bg-transparent"}>
                <option value={"active"}> active </option>
                <option value={"paused"}> paused </option>
                <option value={"warning"}> warning </option>
            </select>
            <ErrorMessage name="status" />
        </div>
    )
}

export default MySelect;