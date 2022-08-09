import { createSlice } from "@reduxjs/toolkit";


let initialState : any = {
    usersList : []
};

const UsersSlice = createSlice({
    name : "usersState",
    initialState,
    reducers : {
        setUsers : ( state, action ) => {
            return { ...state, usersList : action.payload }
        }
    }
})

export const { setUsers } = UsersSlice.actions

export default UsersSlice.reducer