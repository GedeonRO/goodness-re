import { createSlice } from "@reduxjs/toolkit";


export const subCategorySlice = createSlice({
    name: 'subcategory',

    initialState: {
        data: []
    },

    reducers: {
        initsubs: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default subCategorySlice.reducer;

export const { initsubs } = subCategorySlice.actions;