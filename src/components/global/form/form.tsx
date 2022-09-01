// react
import React, { useRef } from "react";

// components
import MyInput from "../../elements/input";
import MySelect from "../../elements/select";
import { inputsValue } from "../../../schema/form";
import FormBtns from "./btns";

// types
import { FormValues } from "../../../types/form";

// libraries
import { Formik, FormikErrors, Form} from "formik";

// services
import { GetUsersWithSWR, SetUser } from "../../../services/users";
import { Toast } from "../../../modules/swal";
import useSWR from "swr";

interface FormMainProps {
    setShowAddUsersForm : React.Dispatch<React.SetStateAction<boolean>>,
    showAddUsersForm : boolean
}

const FormMain : React.FC<FormMainProps> = ({setShowAddUsersForm, showAddUsersForm}) => {

    const { mutate } = useSWR(
        ["https://62b6ea7b76028b55ae716ba0.endapi.io/users_typescript", 1],
        GetUsersWithSWR
    )

    const formRef = useRef<HTMLFormElement>(null)

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

    const onSubmit = async (values : FormValues) => {
        
        const isSuccess = await SetUser(values)

        if(isSuccess) Toast("success", `${values.name} has added to users list`)
        
        setShowAddUsersForm(false)

        mutate();
    }

    return (
        <Formik
            initialValues = {initialValues}
            onSubmit = {onSubmit}
            validate = {validate}
        >
            <Form ref={formRef} className={"flex flex-wrap"}>
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
                <FormBtns formRef={formRef} setShowAddUsersForm={setShowAddUsersForm} showAddUsersForm={showAddUsersForm} />
            </Form>
        </Formik>
    )
}

export default FormMain;