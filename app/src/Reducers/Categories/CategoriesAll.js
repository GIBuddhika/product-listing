import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../Api";

const slice = createSlice({
    name: "categories",
    initialState: {
        data: [],
        loading: true,
    },

    reducers: {
        categoriesRequested: (categories, action) => {
            categories.loading = true;
        },

        categoriesReceived: (categories, action) => {
            categories.data = action.payload;
            categories.loading = false;
        },

        categoriesRequestFailed: (categories, action) => {
            categories.loading = false;
        },
    },
});

export default slice.reducer;

const { categoriesRequested, categoriesReceived, categoriesRequestFailed } = slice.actions;

const url = "/categories";

export const CategoriesAll = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            method: 'GET',
            onStart: categoriesRequested.type,
            onSuccess: categoriesReceived.type,
            onError: categoriesRequestFailed.type,
        })
    );
};
