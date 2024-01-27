import { useEffect } from 'react';
import AddForm from './addContactForm/addContactForm';
import ContactList from './contactList/contactList';

import Filter from './filter/filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterContacts } from 'reduxstore/slice';
import {
  addContactThunk,
  delContactThunk,
  getContactsThunk,
} from 'reduxstore/thunk';
import { nanoid } from 'nanoid';

const App = () => {
  const contacts = useSelector(state => state.contactInfo);
  const isLoading = useSelector(state => state.isLoading);
  console.log('isLoading', isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const addContactF = (name, number) => {
    const newContact = { name, number, id: nanoid() };
    dispatch(addContact(newContact));
    dispatch(addContactThunk(newContact));
  };
  const filter = filterName => {
    dispatch(filterContacts(filterName));
  };

  const delBtn = evt => {
    const id = evt.target.id;
    dispatch(deleteContact(id));
    dispatch(delContactThunk(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <AddForm addContact={addContactF} />

      <h2>Contacts</h2>
      <Filter filter={filter} />
      {isLoading ? (
        <h2>is Fetching</h2>
      ) : (
        contacts && <ContactList arr={contacts} delBtn={delBtn} />
      )}
    </div>
  );
};

export default App;
