import { configureStore } from "@reduxjs/toolkit";
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore } from 'redux-persist'
import persistedContactsReducer from './contactsSlice';
import filterReducer from './filterSlice';


export const store = configureStore({
    reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persisterStore = persistStore(store);