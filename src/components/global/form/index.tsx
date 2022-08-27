// react
import React from "react";

// libraries
import { Formik, FormikErrors, Form, Field, ErrorMessage } from "formik";

// components
import MyInput from "./input";
import { inputsValue } from "../../../schema/form";

// types
import { FormValues } from "../../../types/form";
import MySelect from "./select";


const AddUserForm : React.FC = () => {
    
    const initialValues : FormValues = {
        name: "",
        role: "",
        email: "",
        phone: "",
        status : "active"
    }

    const validate = (values : FormValues) => {
        const errors : FormikErrors<FormValues> = {};

        if (!values.name) {
          errors.name = 'Required';
        }

        return errors
    }

    const onSubmit = (values : FormValues) => {
        console.log(values)
    }


    return (
        <div className={"flex items-center justify-center fixed bg-white/90 w-full h-screen z-50"}>
            <div className={"flex flex-col items-center glass p-4 w-[50rem] rounded-md"}>
                <header>
                    <h1
                        className={"mb-8 mt-6 text-4xl first-letter:text-6xl first-letter:font-semibold align-middle"}
                    >
                        Add User Form
                    </h1>
                </header>
                <Formik
                    initialValues = {initialValues}
                    onSubmit = {onSubmit}
                    validate = {validate}
                >
                    <Form className={"flex flex-wrap"}>
                        <div className={"flex flex-wrap"}>
                            {
                                    inputsValue.map((item, index : number) => {
                                        return (
                                            <MyInput
                                                key={index}
                                                label={`${item.name} :`}
                                                placeholder={item.placeholder}
                                                name = {item.name}
                                                type = {item.type}
                                            />
                                        )
                                    })
                                }
                            <div className={"flex flex-col relative m-4"}>
                                <MySelect
                                    label = {"user status :"}
                                    items = {["active","paused","warning"]}
                                    name = {"status"}
                                />
                            </div>
                        </div>
                        <div className="flex justify-around w-full my-6">
                            <button type="submit" className="mt-5 py-2 px-6 text-[.9rem] bg-green-200 hover:bg-green-300 text-green-700 hover:text-green-800 rounded-[3px] transition">
                                Submit Form
                            </button>
                            <button type="submit" className="mt-5 py-2 px-6 text-[.9rem] bg-rose-200 hover:bg-rose-300 text-rose-700 hover:text-rose-800 rounded-[3px] transition">
                                Close Form
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default AddUserForm;