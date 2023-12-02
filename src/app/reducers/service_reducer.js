import { createSlice } from "@reduxjs/toolkit";


export const serviceSlice = createSlice({
    name: 'service',

    initialState: {
        data: []
    },

    reducers: {
        initservices: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default serviceSlice.reducer;

export const { initservices } = serviceSlice.actions;