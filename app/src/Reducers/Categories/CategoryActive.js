import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "categoryActive",
    initialState: {
        id: null
    },

    reducers: {
        setActiveCategory: (state, action) => {
            state.id = action.payload.category_id
        },
    },
});

export default slice.reducer;

export const { setActiveCategory } = slice.actions;

