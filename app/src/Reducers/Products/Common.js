import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "common",
    initialState: {
        perPage: 2,
        currentPage: 1
    },

    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
});

export default slice.reducer;

export const { setCurrentPage } = slice.actions;

