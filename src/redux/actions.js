import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const setFilterQuery = createAction('filter/setFilterQuery');
