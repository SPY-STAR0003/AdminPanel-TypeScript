// react
import React from "react";

interface FormBtnsProps {
    formRef : any,
    setShowAddUsersForm : React.Dispatch<React.SetStateAction<boolean>>,
    showAddUsersForm : boolean,
}


const FormBtns : React.FC<FormBtnsProps> = ({formRef, setShowAddUsersForm, showAddUsersForm}) => {
    return (
        <div className="flex justify-around w-full my-6">
            <button onClick={() => formRef.current.reset()} type="submit" className="mt-5 py-2 sm:px-6 px-2 text-[.9rem] bg-amber-200 hover:bg-amber-300 text-rose-700 hover:text-rose-800 rounded-[3px] transition">
                Reset Form
            </button>
            <button type="submit" className="mt-5 py-2 sm:px-6 px-2 text-[.9rem] bg-green-200 hover:bg-green-300 text-green-700 hover:text-green-800 rounded-[3px] transition">
                Submit Form
            </button>
            <button onClick={() => setShowAddUsersForm(!showAddUsersForm)} type="submit" className="mt-5 py-2 sm:px-6 px-2 text-[.9rem] bg-rose-200 hover:bg-rose-300 text-rose-700 hover:text-rose-800 rounded-[3px] transition">
                Close Form
            </button>
        </div>
    )
}

export default FormBtns;