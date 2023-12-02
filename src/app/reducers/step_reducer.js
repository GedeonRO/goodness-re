import { createSlice } from "@reduxjs/toolkit";
import { utilsUserDataValidation } from "../utils/utils";


export const stepSlice = createSlice({
    name: 'step',

    initialState: {
        verified: false
    },

    reducers: {
        allFieldsAreFilled: (state, { payload }) => {
            console.log(payload);
            state.verified = utilsUserDataValidation(payload);
        },

        isVerified: (state) => {
            state.verified = false;
        }
    }
});

export default stepSlice.reducer;

export const { allFieldsAreFilled } = stepSlice.actions;