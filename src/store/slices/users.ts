// redux
import { createSlice } from "@reduxjs/toolkit";

// types
import { UserType } from "../../types/users";


interface initialStateProps {
    usersList : [] | UserType[],
    errorGetUsers : any,
    page : number,
    showUserModal : boolean,
    showingUser : UserType
}

let initialState : initialStateProps = {
    usersList : [],
    errorGetUsers : {},
    page : 1,
    showUserModal : false,
    showingUser : { id : 0 }
};

const UsersSlice = createSlice({
    name : "usersState",
    initialState,
    reducers : {
        setUsers : ( state, action ) => {

            // console.log(action.payload)

            return {
                ...state,
                usersList : action.payload?.data?.data,
                errorGetUsers : action.payload?.error,
                page : action.payload?.page
            }
        },
        toggleUserModal : ( state, action ) => {

            console.log(action)

            return {
                ...state,
                showUserModal : !state.showUserModal,
                showingUser : action.payload
            }
        }
    }
})

export const { setUsers, toggleUserModal } = UsersSlice.actions

export default UsersSlice.reducer