import { createSlice } from "@reduxjs/toolkit";


export const itemSlice = createSlice({
    name: 'item',

    initialState: {
        data: []
    },

    reducers: {
        inititems: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default itemSlice.reducer;

export const { inititems } = itemSlice.actions;