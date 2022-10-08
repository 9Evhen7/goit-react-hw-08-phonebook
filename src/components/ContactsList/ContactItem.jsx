import { DeleteButton } from './contactItemStyles';
import { Item } from '../Contacts/contactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleRemoveContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <div>
                {name}: {number}{' '}
              </div>
              <DeleteButton id={id} onClick={handleRemoveContact}>
                Delete
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
