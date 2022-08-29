import { createSlice } from "@reduxjs/toolkit";


let initialState : any = {
    usersList : [],
    errorGetUsers : {}
};

const UsersSlice = createSlice({
    name : "usersState",
    initialState,
    reducers : {
        setUsers : ( state, action ) => {
            return {
                ...state,
                usersList : action.payload.data?.data,
                errorGetUsers : action.payload.error
            }
        }
    }
})

export const { setUsers } = UsersSlice.actions

export default UsersSlice.reducer