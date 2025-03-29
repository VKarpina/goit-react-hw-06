import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../assets/initialContacts.json";

const slice = createSlice({
  name: "contacts",
  initialState: { items: initialContacts },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addContact, deleteContact } = slice.actions;
