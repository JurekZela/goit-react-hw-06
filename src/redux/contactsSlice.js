import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'contact',
    storage,
  };

const contactsSlice = createSlice({
    name: 'contactInfo',
        initialState: {
              items: []
          },
          reducers: {
            addContact: (state, action) => {
                state.items.push(action.payload);
            },
            deleteContact: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload)
            },
          },
});

export  const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;