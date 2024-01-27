import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, delContact, getContacts } from 'api/fetchContacts';

export const getContactsThunk = createAsyncThunk('contacs/getALL', async _ => {
  try {
    const result = await getContacts();
    return result.data;
  } catch (err) {
    console.log('err', err);
  }
});
export const addContactThunk = createAsyncThunk(
  'contacs/post',
  async newContact => {
    try {
      const result = await addContact(newContact);
      console.log(result);
    } catch (err) {
      console.log('err', err);
    }
  }
);
export const delContactThunk = createAsyncThunk(
  'contacs',
  async (id, { rejectWithValue }) => {
    try {
      const result = await delContact(id);
      console.log(result);
    } catch (err) {
      const error = rejectWithValue(err.response.data);
      console.log(error.payload.msg);
    }
  }
);
