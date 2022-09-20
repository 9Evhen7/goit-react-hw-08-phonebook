import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilterQuery } from './actions';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: '1', name: 'FIRST', number: 123456 },
  { id: '2', name: 'SeCOND', number: 654321 },
];

const createNewContact = ({ name, number }) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  return newContact;
};

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => [...state, createNewContact(action.payload)],
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.id),
});

const filterReducer = createReducer('', {
  [setFilterQuery]: (state, action) => (state = action.payload),
});

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
