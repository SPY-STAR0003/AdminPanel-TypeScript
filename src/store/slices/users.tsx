import { createSlice } from "@reduxjs/toolkit";


let initialState : any = [];

const UsersSlice = createSlice({
    name : "usersState",
    initialState,
    reducers : {
        getUsers : ( state, action ) => {
            console.log(action.payload)
        }
    }
})

export const { getUsers } = UsersSlice.actions

export default UsersSlice.reducer