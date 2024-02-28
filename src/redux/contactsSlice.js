import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contactInfo',
        initialState: {
              items: []
          },
          reducers: {
            addContact: (state, action) => {
                state.items.push(action.payload);
            },
            deleteContact: (state, action) => {},
          },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;