import { ImBin } from 'react-icons/im';
import { DeleteButton } from './contactItemStyles';
import { Item } from '../Contacts/contactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  console.log(contacts);

  const handleRemoveContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
    const ID = e.currentTarget.id;
    console.log(ID);
    const CONT = contacts.find(contact => {
      return contact.id === ID;
    });
    console.log(CONT);
  };

  return (
    <>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {name}: {number}{' '}
              <DeleteButton id={id} onClick={handleRemoveContact}>
                <ImBin />
              </DeleteButton>
            </Item>
          );
        })
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
