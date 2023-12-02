import { createSlice } from "@reduxjs/toolkit";


export const brandSlice = createSlice({
    name: 'brand',

    initialState: {
        data: []
    },

    reducers: {
        initbrands: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default brandSlice.reducer;

export const { initbrands } = brandSlice.actions;