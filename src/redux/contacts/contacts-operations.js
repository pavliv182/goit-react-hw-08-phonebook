import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetch, addNewContact, removeNewContact } from 'shared/services/API';

// const setToken = () => {
//   const allLocalStorage = JSON.parse(localStorage.getItem('persist:root'));
//   const token = JSON.parse(allLocalStorage.auth).token;

//   instance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, { rejectWithValue }) => {
    try {
      const data = await fetch(token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await addNewContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  // {
  //   condition: (data, { getState }) => {
  //     const { contacts } = getState();
  //     const duplicateContact = contacts.items.find(
  //       contact => contact.name === data.name
  //     );
  //     if (duplicateContact) {
  //       alert('This name is already exicited');
  //       return false;
  //     }
  //     return data;
  //   },
  // }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const deletedId = await removeNewContact(id);
      return deletedId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
