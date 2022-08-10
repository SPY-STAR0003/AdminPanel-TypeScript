// react
import React from "react";

// next ui
import {Grid, Input, Text} from "@nextui-org/react";
import { useField } from "formik";

// types
import { FormValues } from "../../../types/form"

interface Props {
    name : string
    label : string
    placeholder : string
    type : string
}

const MyInput : React.FC<Props> = ({ ...props }) => {

    const [ field, meta] = useField(props)

    return (
        <Grid className="w-3 mtb-4 relative">
            <Input 
                underlined
                color="secondary"
                {...props}
                {...field}
            />
            {
                meta.touched && meta.error
                ? <Text className="bold-7 myInputError" size={".7rem"} color="error"> {meta.error} </Text>
                : null
            }
        </Grid>
    )
} 

export default MyInput;