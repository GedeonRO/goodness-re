import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',

    initialState: {
        data: {}
    },

    reducers: {

        // User connection
        initialize: (state, { payload }) => {
            state.data = payload;
            localStorage.setItem("userData", JSON.stringify(payload));
        },

        // User disconnection
        removedata: (state) => {
            state.data = {}
            localStorage.removeItem("userData");
        }
    }
});

export default userSlice.reducer;

export const { initialize, removedata } = userSlice.actions;