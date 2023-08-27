import { configureStore, createSlice } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  phonenumber: string;
  address: string;
  companyName: string;
}


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    value: [] as Contact[],
  },
  reducers: {
    addContacts(state: { value: Contact[] }, action: { payload: Contact }) {
      console.log("Helllllo " + state.value);
      state.value.push(action.payload);
      console.log("Helllllo " + state.value);
    },
    editContacts(state, action) {
      const index = state.value.findIndex((contact) => contact.id === action.payload.id);
      if (index > -1) {
        state.value[index] = action.payload;
      }
    },
    deleteContacts(state, action) {
      const index = state.value.findIndex((contact) => contact.id === action.payload.id);
      if (index > -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {addContacts, editContacts, deleteContacts} = contactsSlice.actions;
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  }
});
