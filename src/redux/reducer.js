const initialState = {
  contacts: [
    { id: '1', name: 'first', number: 123456 },
    { id: '2', name: 'second', number: 654321 },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/removeContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
