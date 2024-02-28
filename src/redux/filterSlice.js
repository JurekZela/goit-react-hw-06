import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterContacts',
    initialState: {
		name: ""
	},
    reducers: {
        filter: (state, action)  => {},
    },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;