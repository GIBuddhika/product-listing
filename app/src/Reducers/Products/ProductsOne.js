import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../Api";

const slice = createSlice({
    name: "product",
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

export const ProductsOne = (id) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url: "/products/" + id,
            method: 'GET',
            onStart: productsRequested.type,
            onSuccess: productsReceived.type,
            onError: productsRequestFailed.type,
        })
    );
};
