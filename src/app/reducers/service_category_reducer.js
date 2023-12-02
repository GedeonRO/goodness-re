import { createSlice } from "@reduxjs/toolkit";


export const categoryServiceSlice = createSlice({
    name: 'servicecategory',

    initialState: {
        data: []
    },

    reducers: {
        initservicecategory: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default categoryServiceSlice.reducer;

export const { initservicecategory } = categoryServiceSlice.actions;