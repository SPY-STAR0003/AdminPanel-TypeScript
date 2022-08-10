// react
import React from "react";

// libraries
import {Grid, Text, Button} from "@nextui-org/react";
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
        <div className={"addUserForm"}>
            <div className={"addUserFormContent"}>
                <header>
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            textAlign : "center"
                        }}
                        weight="bold"
                    >
                        Add User Form
                    </Text>
                </header>
                <Formik
                    initialValues = {initialValues}
                    onSubmit = {onSubmit}
                    validate = {validate}
                >
                    <Form className={"flexColumn"}>
                        <div className="flexCenter flexWrap">
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
                            <div>
                                <MySelect
                                    label = {"user status :"}
                                    items = {["active","paused","warning"]}
                                    name = {"status"}
                                />
                            </div>
                        </div>
                        <div className="flexSpaceAround mt-6">
                            <button type="submit" className="successBtn w-3 mt-5">
                                Submit Form
                            </button>
                            <button type="submit" className="errorBtn w-3 mt-5">
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