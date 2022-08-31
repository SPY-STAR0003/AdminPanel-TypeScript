import { createSlice } from "@reduxjs/toolkit";


let initialState : any = {
    usersList : [],
    errorGetUsers : {},
    mutate : null
};

const UsersSlice = createSlice({
    name : "usersState",
    initialState,
    reducers : {
        setUsers : ( state, action ) => {
            return {
                ...state,
                usersList : action.payload.data?.data,
                errorGetUsers : action.payload.error,
                mutate : action.payload.mutate
            }
        }
    }
})

export const { setUsers } = UsersSlice.actions

export default UsersSlice.reducer