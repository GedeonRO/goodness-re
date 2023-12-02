import { createSlice } from "@reduxjs/toolkit";


export const sectionSlice = createSlice({
    name: 'section',

    initialState: {
        data: []
    },

    reducers: {
        initsections: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default sectionSlice.reducer;

export const { initsections } = sectionSlice.actions;