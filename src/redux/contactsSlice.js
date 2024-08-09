import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const initialState = {
    items: initialContacts,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        },
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { deleteContact, addContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.items;

