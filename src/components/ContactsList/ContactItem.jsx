import { DeleteButton } from './contactItemStyles';
import { Item } from '../Contacts/contactsStyles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { getContacts, getFilter } from '../../redux/contacts/selectors';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleRemoveContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  const contactsToRender =
    filter !== ''
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        })
      : contacts;
  console.log(contactsToRender);

  return (
    <>
      {contactsToRender.length > 0 ? (
        contactsToRender.map(({ id, name, number }) => {
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
