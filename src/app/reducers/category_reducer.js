import { createSlice } from "@reduxjs/toolkit";


export const categorySlice = createSlice({
    name: 'category',

    initialState: {
        data: []
    },

    reducers: {
        initialize: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default categorySlice.reducer;

export const { initialize } = categorySlice.actions;