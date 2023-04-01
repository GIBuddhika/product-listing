import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../Api";

const slice = createSlice({
    name: "products",
    initialState: {
        data: [],
        loading: true,
    },

    reducers: {
        productsRequested: (products, action) => {
            products.loading = true;
        },

        productsReceived: (products, action) => {
            products.data = action.payload;
            products.loading = false;
        },

        productsRequestFailed: (products, action) => {
            products.loading = false;
        },
    },
});

export default slice.reducer;

const { productsRequested, productsReceived, productsRequestFailed } = slice.actions;

const url = "/products";

export const ProductsAll = (params) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            method: 'GET',
            params: params,
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};
