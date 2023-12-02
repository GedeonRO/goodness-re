import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: 'product',

    initialState: {
        data: []
    },

    reducers: {
        initProducts: (state, { payload }) => {
            state.data = payload;
        },
    }
});

export default productSlice.reducer;

export const { initProducts } = productSlice.actions;