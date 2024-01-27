import { api } from './api';

export const getContacts = async () => {
  return await api('contacts');
};

export const addContact = async newContact => {
  return await api.post('contacts', newContact);
};

export const delContact = async id => {
  return await api.delete(`contacts/${id}`);
};
