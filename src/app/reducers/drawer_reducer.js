import { createSlice } from "@reduxjs/toolkit";


export const drawerSlice = createSlice({
    name: 'drawer',

    initialState: {
        isOpen: false,
        direction: '',
    },

    reducers: {
        openDrawer: (state, { payload }) => {
            state.isOpen = true;
            state.direction = payload.direction;
        },

        closeDrawer: (state, { payload }) => {
            state.isOpen = false;
            state.direction = payload.direction;
        }
    }
});

export default drawerSlice.reducer;

export const { openDrawer, closeDrawer } = drawerSlice.actions;