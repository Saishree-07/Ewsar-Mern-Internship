import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: [],
};
const userSlice = createSlice({
    name : 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payloadload];
        },
    },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

