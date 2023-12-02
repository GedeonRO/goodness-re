import { createSlice } from "@reduxjs/toolkit";
import { utilsCartTotalPrice, utilsThousandSeparator } from "../utils/utils";



export const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        cart: [],
        total: 0,
    },

    reducers: {

        restore: (state) => {
            state.cart = [];
            state.total = 0;
        },

        addToCart: (state, { payload }) => {
            let data = {};
            let findInCart = state.cart.find(element => element["data"].id === payload.id);
            if (findInCart) {
                findInCart.quantity += 1;
            } else {
                data = {
                    "quantity": 1,
                    "data": payload,
                }
                state.cart.push(data);
            }
            state.total = utilsThousandSeparator(utilsCartTotalPrice(state.cart));
        },

        updateCart: (state, { payload }) => {
            let findInCart = state.cart.find(element => element["data"].id === payload.data.data.id);
            if (findInCart) {
                if (payload.type === "add") {
                    findInCart.quantity += 1;
                } else if (payload.type === "remove") {
                    if (findInCart.quantity > 1) {
                        findInCart.quantity -= 1;
                    } else {
                        let findInCartIndex = state.cart.indexOf(state.cart.find(element => element["data"].id === payload.data.data.id));
                        if (findInCartIndex != null) {
                            if (findInCartIndex != -1) {
                                state.cart.splice(findInCartIndex, 1);
                            }
                        }
                    }
                }
            }
            state.total = utilsThousandSeparator(utilsCartTotalPrice(state.cart));
        },

        removeFromCart: (state, { payload }) => {
            let findInCartIndex = state.cart.indexOf(state.cart.find(element => element["data"].id === payload["data"].id));
            if (findInCartIndex != null) {
                if (findInCartIndex != -1) {
                    state.cart.splice(findInCartIndex, 1);
                }
            }
            state.total = utilsThousandSeparator(utilsCartTotalPrice(state.cart));
        },

        removeAll: (state) => {
            state.cart = [];
            state.total = 0;
        }
    }
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, updateCart, restore } = cartSlice.actions;